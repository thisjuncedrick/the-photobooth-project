import { BoothProvider } from "@/components/booth-provider";
import React from "react";

export default function BoothLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BoothProvider>{children}</BoothProvider>;
}
