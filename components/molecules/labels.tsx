"use client";

import { cn } from "@/lib/utils";
import { useCameraStore } from "@/stores/camera-store";
import { useCaptureStore } from "@/stores/capture-store";
import { useEffect, useState } from "react";
import { useBoothContext } from "../booth-provider";

const ErrorLabel = () => {
  const error = useCameraStore((s) => s.error);
  if (!error) return null;

  return (
    <div
      className='pointer-events-none absolute inset-0 z-30 flex items-center justify-center p-3 lg:p-6'
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
  const remaining = useCaptureStore((s) => s.remaining);
  const error = useCameraStore((s) => s.error);

  if (!!error || remaining == null) return null;

  return (
    <div
      className='pointer-events-none absolute inset-0 z-30 flex items-center justify-center p-3 lg:p-6'
      aria-live='polite'
      aria-atomic='true'
    >
      <div className='flex aspect-square size-18 items-center justify-center rounded-full bg-black/80 text-center text-white sm:size-28'>
        <span className='line-clamp-1 text-4xl font-bold tracking-[0.08em] uppercase tabular-nums sm:text-6xl'>
          {remaining}
        </span>
      </div>
    </div>
  );
};

const FilterLabel = () => {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);

  const { activeFilter } = useBoothContext();
  const error = useCameraStore((s) => s.error);

  useEffect(() => {
    setExiting(false);

    setMounted(true);

    const hideTimer = setTimeout(() => {
      setExiting(true);
    }, 2000 - 200);

    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 2000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, [activeFilter]);

  if (error || !mounted) return null;

  return (
    <div
      key={activeFilter}
      className={cn(
        "pointer-events-none absolute inset-0 z-30 flex items-center justify-center p-3 lg:p-6",
        "animate-in zoom-in-80 fade-in duration-300 ease-out",
        exiting && "animate-out fade-out zoom-out-80 duration-300",
      )}
      aria-live='polite'
      aria-atomic='true'
    >
      <div className='rounded-md bg-black/80 px-4 py-3 text-center text-white shadow-xl'>
        <span className='line-clamp-1 text-xl font-bold tracking-wide uppercase sm:text-2xl'>
          {activeFilter || "Filter Applied"}
        </span>
      </div>
    </div>
  );
};

export { CountdownLabel, ErrorLabel, FilterLabel };
