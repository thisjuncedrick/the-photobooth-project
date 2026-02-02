import { IconArrowLeft } from "@tabler/icons-react";
import { Metadata } from "next";

import { GridBackground } from "@/components/atoms/grid-background";
import { LinkButton } from "@/components/atoms/link-button";
import {
  ExportControls,
  FooterTextControl,
  MetadataControls,
  ReturnHomeControl,
  StripColorControl,
} from "@/components/molecules/customize-controls";
import { CustomizeControlSection } from "@/components/molecules/customize-option";
import { PrintPreview } from "@/components/organisms/print-preview";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Customize Strip",
};

export default function PrintPage() {
  return (
    <div className='flex min-h-dvh flex-col-reverse overflow-hidden lg:h-dvh lg:flex-row'>
      <ScrollArea
        type='always'
        className='bg-secondary relative border-0 border-b lg:col-span-2 lg:w-2/3 lg:border-r lg:border-b-0'
        aria-labelledby='print-preview-heading'
      >
        <GridBackground />
        <main className='relative z-10 px-6 py-12' id='print-preview-heading'>
          <h1 className='sr-only'>Print Preview</h1>
          <PrintPreview />
        </main>
      </ScrollArea>

      <ScrollArea
        type='always'
        className='h-full min-h-0 lg:w-1/3'
        aria-labelledby='customizer-heading'
      >
        <aside className='flex max-h-full flex-col gap-6 px-6 py-12 sm:px-12'>
          <LinkButton
            href='/booth'
            variant='ghost'
            className='text-primary hover:text-primary w-fit justify-start'
          >
            <IconArrowLeft aria-hidden='true' />
            <span>Return to Booth</span>
          </LinkButton>

          <h2
            id='customizer-heading'
            className='text-5xl leading-[0.9] font-bold text-pretty uppercase'
          >
            Strip Customizer
          </h2>

          <Separator decorative={true} />

          <CustomizeControlSection className='flex flex-col gap-6'>
            <StripColorControl />
            <FooterTextControl />
            <MetadataControls />
            <ExportControls />
            <ReturnHomeControl />
          </CustomizeControlSection>
        </aside>
      </ScrollArea>
    </div>
  );
}
