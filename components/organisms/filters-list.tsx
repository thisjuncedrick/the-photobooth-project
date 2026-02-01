"use client";

import { IconAdjustmentsFilled } from "@tabler/icons-react";

import { useBoothContext } from "../booth-provider";
import { FilterItem } from "../molecules/filter-item";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

import { CSSGramFilters } from "@/config/options";

const SectionHeader = () => (
  <header className='text-primary h-(--panel-header-height) border-b lg:aspect-square lg:h-(--filter-card-size) lg:border-r lg:border-b-0'>
    <div className='flex size-full flex-col justify-center gap-1.5 p-3 lg:items-center'>
      <IconAdjustmentsFilled
        className='hidden rotate-90 lg:inline-flex'
        aria-hidden='true'
      />
      <h2 id='filters-title' className='text-sm font-medium tracking-[0.08em] uppercase'>
        Filters
      </h2>
    </div>
  </header>
);

const FilterListScroll = () => {
  const { activeFilter, setActiveFilter } = useBoothContext();

  return (
    <ul className='flex gap-3 p-3 lg:gap-0 lg:p-0'>
      {CSSGramFilters.map((filter, i) => (
        <FilterItem
          filterClass={filter}
          key={i}
          active={filter === activeFilter}
          onFilterSelect={setActiveFilter}
        />
      ))}
    </ul>
  );
};

const FiltersList = () => {
  return (
    <section className='flex flex-col lg:flex-row' aria-labelledby='filters-title'>
      <SectionHeader />

      <ScrollArea
        tabIndex={-1}
        type='always'
        className='min-w-0 flex-1'
        role='region'
        aria-label='Available filters'
      >
        <FilterListScroll />

        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </section>
  );
};

export { FiltersList };
