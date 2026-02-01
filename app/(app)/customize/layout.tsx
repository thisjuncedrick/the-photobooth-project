import { CustomizerProvider } from "@/components/customizer-provider";
import { CustomizerSettings } from "@/config/options";
import React from "react";

export default function PrintLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <CustomizerProvider initialSettings={CustomizerSettings}>
      {children}
    </CustomizerProvider>
  );
}
