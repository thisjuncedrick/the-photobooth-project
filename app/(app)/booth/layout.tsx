import React from "react";

import { BoothProvider } from "@/components/booth-provider";

import "@/styles/cssgram.min.css";

export default function BoothLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BoothProvider>{children}</BoothProvider>;
}
