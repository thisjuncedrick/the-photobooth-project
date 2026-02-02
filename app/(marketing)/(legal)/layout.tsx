import { LinkButton } from "@/components/atoms/link-button";
import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";

export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='px-6 py-20 sm:px-12 lg:px-18'>
      <LinkButton
        href='/'
        variant='ghost'
        className='text-primary hover:text-primary w-fit justify-start'
      >
        <IconArrowLeft aria-hidden='true' />
        <span>Return to Home</span>
      </LinkButton>
      {children}
    </div>
  );
}
