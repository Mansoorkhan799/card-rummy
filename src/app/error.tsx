'use client';

import CtaButton from '@/components/CtaButton';

export default function Error({
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-400 mb-6 text-center">
        We apologize for the inconvenience. Please try again.
      </p>
      <CtaButton as="button" icon="arrow" onClick={reset}>
        Try again
      </CtaButton>
    </div>
  );
} 