import { IconLoader3 } from "@tabler/icons-react";

export default function LoadingPage() {
  return (
    <div className='bg-background text-foreground flex min-h-dvh flex-col items-center justify-center gap-6'>
      <div
        role='status'
        aria-live='polite'
        aria-busy='true'
        className='flex flex-col items-center gap-4'
      >
        <IconLoader3
          className='text-primary size-12 animate-spin md:size-16'
          aria-hidden='true'
        />

        <p className='animate-pulse text-xl font-medium'>Loading…</p>

        <p className='sr-only'>
          Please wait while the content is loading. This may take a few moments.
        </p>
      </div>
    </div>
  );
}
