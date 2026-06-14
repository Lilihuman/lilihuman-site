import FitnessTabs from '@/components/FitnessTabs';

export default function FitnessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FitnessTabs />
      {children}
    </>
  );
}
