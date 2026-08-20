/**
 * "Hidden" badge shown on items that are private to the public but visible to
 * the owner in Preview Mode. Render it only when isPreview() is true.
 */
export default function PreviewBadge({ label = 'Hidden', className = '' }: { label?: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-body text-[11px] font-semibold text-white bg-peach rounded-full px-2 py-0.5 shadow-sm ${className}`}
    >
      🔒 {label}
    </span>
  );
}
