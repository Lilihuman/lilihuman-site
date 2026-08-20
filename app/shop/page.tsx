import { products } from '@/data/products';
import { isPreview } from '@/lib/preview';
import ShopClient from './ShopClient';

// Server component: filter hidden products out BEFORE handing the list to the
// client, so they're never sent to public visitors. Preview Mode gets them all.
export default function Shop() {
  const preview = isPreview();
  const visible = preview ? products : products.filter((p) => !p.hidden);
  return <ShopClient products={visible} preview={preview} />;
}
