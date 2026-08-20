import HiddenGate from '@/components/HiddenGate';

// Programs is hidden from the public — 404 unless in Preview Mode.
export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <HiddenGate>{children}</HiddenGate>;
}
