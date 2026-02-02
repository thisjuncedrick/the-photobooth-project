interface LegalPageTemplateProps {
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}

const LegalPageTemplate = ({ title, aside, children }: LegalPageTemplateProps) => {
  return (
    <div className='mx-auto max-w-6xl py-12'>
      <h1 className='max-w-md text-5xl leading-[0.9] font-black tracking-normal uppercase sm:text-6xl lg:text-8xl'>
        {title}
      </h1>

      <div className='bg-primary my-12 h-2 w-[120px]' />

      <div className='grid grid-cols-1 items-start gap-3 lg:grid-cols-3 lg:gap-6'>
        {aside && <aside className='lg:sticky lg:top-20'>{aside}</aside>}

        <main className='flex flex-col divide-y border-y [counter-reset:section] lg:col-span-2'>
          {children}
        </main>
      </div>
    </div>
  );
};

export { LegalPageTemplate };
