import { SessionProvider } from "@/components/session-provider";
import { Settings } from "@/config/options";
import React from "react";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider boothSettings={Settings}>
      <div className='container_ w-full border-x'>{children}</div>
    </SessionProvider>
  );
}
