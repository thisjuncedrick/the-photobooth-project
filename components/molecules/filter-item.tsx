import Image from "next/image";

import { Marketing } from "@/config/marketing";
import { cn } from "@/lib/utils";

const FilterPreview = (props: React.ComponentProps<"button">) => {
  return (
    <>
      <Image
        src={Marketing.Images[0].src}
        className='aspect-4/3 object-cover object-center'
        height={213}
        width={320}
        alt=''
      />
      <div className='flex h-full items-center justify-center'>
        <span className='line-clamp-1 w-full text-center text-[10px] font-bold tracking-[0.08em] uppercase'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, perspiciatis!
        </span>
      </div>
    </>
  );
};

const FilterItem = ({ active }: { active: boolean }) => {
  return (
    <li
      className={cn(
        "text-primary aspect-square h-[calc(var(--filter-card-size)*0.9)] sm:h-(--filter-card-size)",
        "border lg:border-0 lg:border-r lg:pb-2",
        "focus-within:bg-muted focus-within:text-muted-foreground transition-colors duration-200",
        { "hover:bg-muted hover:text-muted-foreground": !active },
        { "bg-primary text-primary-foreground": active },
      )}
    >
      <button
        type='button'
        aria-pressed={active}
        tabIndex={active ? -1 : undefined}
        aria-label={`Apply filter`}
        className='relative flex size-full flex-col outline-none'
      >
        <FilterPreview />
      </button>
    </li>
  );
};

export { FilterItem };
