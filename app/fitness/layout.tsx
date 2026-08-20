import FitnessTabs from '@/components/FitnessTabs';
import { isPreview } from '@/lib/preview';

export default function FitnessLayout({ children }: { children: React.ReactNode }) {
  const preview = isPreview();
  return (
    <>
      <FitnessTabs preview={preview} />
      {children}
    </>
  );
}
