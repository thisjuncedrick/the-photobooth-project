import Image from "next/image";

import { Marketing } from "@/config/marketing";
import { cn } from "@/lib/utils";
import React from "react";

const FilterPreview = ({ filterClass }: { filterClass: string }) => {
  return (
    <>
      <div className={cn("bg-background aspect-4/3", filterClass)}>
        <Image
          src={Marketing.Images[2].src}
          className='size-full object-cover object-center'
          height={213}
          width={320}
          alt={`Filter preview for ${filterClass}`}
        />
      </div>
      <div className='flex h-full items-center justify-center'>
        <span className='line-clamp-1 w-full text-center text-[10px] font-bold tracking-[0.08em] uppercase'>
          {filterClass}
        </span>
      </div>
    </>
  );
};

const FilterItem = React.memo(
  ({
    active,
    filterClass,
    onFilterSelect,
  }: {
    active: boolean;
    filterClass: string;
    onFilterSelect: (filterClass: string) => void;
  }) => {
    return (
      <li
        className={cn(
          "text-primary aspect-square h-[calc(var(--filter-card-size)*0.9)] sm:h-(--filter-card-size)",
          "border transition-colors duration-200 lg:border-0 lg:border-r lg:pb-2",
          { "focus-within:bg-muted focus-within:text-muted-foreground": !active },
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
          onClick={() => onFilterSelect(filterClass)}
        >
          <FilterPreview filterClass={filterClass} />
        </button>
      </li>
    );
  },
);

export { FilterItem };
