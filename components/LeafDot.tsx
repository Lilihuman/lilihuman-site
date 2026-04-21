export default function LeafDot({ className = '' }: { className?: string }) {
  return (
    <svg
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
    >
      <path
        d="M4 9C4 9 1 6.5 1 4C1 2.343 2.343 1 4 1C5.657 1 7 2.343 7 4C7 6.5 4 9 4 9Z"
        fill="#7A9A5A"
      />
    </svg>
  );
}
