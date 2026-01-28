const TailwindIndicator = () => {
  return (
    <div className='bg-secondary text-secondary-foreground fixed right-3 bottom-3 flex size-6 items-center justify-center rounded-full border font-mono text-[10px]'>
      <p className='sm:hidden'>XS</p>
      <p className='hidden sm:inline-flex md:hidden'>SM</p>
      <p className='hidden md:inline-flex lg:hidden'>MD</p>
      <p className='hidden lg:inline-flex xl:hidden'>LG</p>
      <p className='hidden xl:inline-flex 2xl:hidden'>XL</p>
      <p className='hidden 2xl:inline-flex'>2XL</p>
    </div>
  );
};

export { TailwindIndicator };
