import HiddenGate from '@/components/HiddenGate';

// Personal Training is hidden from the public — 404 unless in Preview Mode.
export default function PersonalTrainingLayout({ children }: { children: React.ReactNode }) {
  return <HiddenGate>{children}</HiddenGate>;
}
