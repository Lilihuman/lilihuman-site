import HiddenGate from '@/components/HiddenGate';

// Library is hidden from the public — 404 unless in Preview Mode.
export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return <HiddenGate>{children}</HiddenGate>;
}
