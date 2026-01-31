"use client";

import { useCameraStore } from "@/stores/camera-store";

const ErrorLabel = () => {
  const error = useCameraStore((s) => s.error);
  if (!error) return null;

  return (
    <div
      className='pointer-events-none absolute inset-0 z-1 flex items-center justify-center p-3 lg:p-6'
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
    >
      <div className='rounded-md bg-black/80 px-3 py-2 text-center leading-relaxed tracking-[0.08em] text-white'>
        <p className='text-destructive mb-3 line-clamp-5 text-sm uppercase sm:text-lg'>
          {error.message}
        </p>
        <span className='text-destructive font-mono text-xs sm:text-sm'>
          {error.name}
        </span>
      </div>
    </div>
  );
};

const CountdownLabel = () => {
  const error = useCameraStore((s) => s.error);
  if (error) return null;

  return (
    <div
      className='pointer-events-none absolute inset-0 z-1 flex items-center justify-center p-3 lg:p-6'
      aria-live='polite'
      aria-atomic='true'
    >
      <div className='flex aspect-square size-18 items-center justify-center rounded-full bg-black/80 text-center text-white sm:size-28'>
        <span className='line-clamp-1 text-4xl font-bold tracking-[0.08em] uppercase tabular-nums sm:text-6xl'>
          0
        </span>
      </div>
    </div>
  );
};

const FilterLabel = () => {
  const error = useCameraStore((s) => s.error);
  if (error) return null;

  return (
    <div
      className='pointer-events-none absolute inset-0 z-1 flex items-center justify-center p-3 lg:p-6'
      aria-live='polite'
      aria-atomic='true'
    >
      <div className='rounded-md bg-black/80 px-3 py-2 text-center text-white'>
        <span className='line-clamp-1 text-lg font-bold tracking-[0.08em] uppercase sm:text-2xl'>
          A Very Long Filter That Might Get Chopped Off By An Ellipsis
        </span>
      </div>
    </div>
  );
};

export { CountdownLabel, ErrorLabel, FilterLabel };
