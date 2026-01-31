import { PrintProvider } from "@/components/print-provider";
import { CustomizerSettings } from "@/config/options";
import React from "react";

export default function PrintLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PrintProvider initialSettings={CustomizerSettings}>{children}</PrintProvider>;
}
