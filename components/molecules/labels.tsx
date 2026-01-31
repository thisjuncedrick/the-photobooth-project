const CountdownLabel = () => {
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

export { CountdownLabel, FilterLabel };
