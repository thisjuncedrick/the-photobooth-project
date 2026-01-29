import React from "react";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className='container_ w-full border-x'>{children}</div>;
}
