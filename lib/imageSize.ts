import fs from 'fs';
import path from 'path';

export interface ImageSize {
  width: number;
  height: number;
}

const FALLBACK: ImageSize = { width: 1536, height: 1024 };

/**
 * Reads an image's real pixel dimensions from /public at build time.
 *
 * Freebie artwork is not a consistent shape (ratios range from 1:1 to 1.9:1),
 * so passing fixed width/height to next/image would reserve the wrong space and
 * make the page jump as the real image loads. Server-side only — safe in a
 * server component or generateMetadata, both of which run at build.
 */
export function getImageSize(publicPath: string): ImageSize {
  try {
    const file = path.join(process.cwd(), 'public', publicPath);
    const fd = fs.openSync(file, 'r');
    const buf = Buffer.alloc(32);
    fs.readSync(fd, buf, 0, 32, 0);
    fs.closeSync(fd);

    // PNG: 8-byte signature, then IHDR whose width/height are at offsets 16/20.
    if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
      const width = buf.readUInt32BE(16);
      const height = buf.readUInt32BE(20);
      if (width && height) return { width, height };
    }

    // JPEG needs a segment walk; read enough of the file to find SOF0/SOF2.
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      const data = fs.readFileSync(file);
      let offset = 2;
      while (offset < data.length - 9) {
        if (data[offset] !== 0xff) {
          offset++;
          continue;
        }
        const marker = data[offset + 1];
        // SOF0-SOF3, SOF5-SOF7, SOF9-SOF11, SOF13-SOF15 carry the dimensions.
        if (
          (marker >= 0xc0 && marker <= 0xc3) ||
          (marker >= 0xc5 && marker <= 0xc7) ||
          (marker >= 0xc9 && marker <= 0xcb) ||
          (marker >= 0xcd && marker <= 0xcf)
        ) {
          return { height: data.readUInt16BE(offset + 5), width: data.readUInt16BE(offset + 7) };
        }
        offset += 2 + data.readUInt16BE(offset + 2);
      }
    }
  } catch {
    // Fall through — a wrong-but-sane ratio beats failing the build.
  }
  return FALLBACK;
}
