import Image from 'next/image';
import FreeDownloadButton from '@/components/FreeDownloadButton';
import LeafDot from '@/components/LeafDot';

/**
 * "Peek inside" section for free download pages.
 *
 * Shows a protected preview of the actual guide — the top is crisp and
 * readable, the rest is blurred and watermarked (the image itself is
 * pre-processed; see /public/images/previews/<slug>-locked.png). A centred
 * email-gate card sits over it, reusing the existing FreeDownloadButton flow
 * so there's a single capture path that posts to /api/newsletter and then
 * triggers the download.
 *
 * The preview image is derived from the slug, so no data-file changes are
 * needed: every freebie at /free/<slug> gets /images/previews/<slug>-locked.png.
 */
interface Props {
  slug: string;
  filePath: string;
  productName: string;
  caption?: string;
}

export default function FreebiePeek({ slug, filePath, productName, caption }: Props) {
  const lockedImage = `/images/previews/${slug}-locked.png`;

  return (
    <section className="max-w-2xl mx-auto px-5 md:px-8 pb-24 text-center">
      <div className="flex justify-center">
        <span className="section-eyebrow">
          <LeafDot /> Peek inside
        </span>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-light text-brown mt-3">
        See the actual guide
      </h2>
      <p className="font-body text-sm text-mocha/70 mt-2 max-w-md mx-auto leading-relaxed">
        {caption ??
          'A real look at what you’re getting — the full, printable copy is free with your email.'}
      </p>

      <div className="relative mt-8 rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40 bg-cream aspect-[4/5]">
        <Image
          src={lockedImage}
          alt={`${productName} — locked preview`}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover object-top"
        />

        {/* Email-gate overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <div className="bg-cream/95 backdrop-blur-sm rounded-2xl shadow-xl border border-peach-light/50 px-6 py-6 w-full max-w-sm text-center">
            <div className="text-3xl leading-none" aria-hidden>🔒</div>
            <h3 className="font-heading text-xl text-brown mt-2">
              Unlock the full guide — free
            </h3>
            <p className="font-body text-xs text-mocha/60 mt-1 mb-4 leading-relaxed">
              Print-ready PDF · no spam, just the download and the occasional note.
            </p>
            <div className="flex justify-center">
              <FreeDownloadButton filePath={filePath} productName={productName} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
