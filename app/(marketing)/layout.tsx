import { SiteFooter } from "@/components/organisms/site-footer";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex flex-col'>
      <div className='container_ min-h-dvh w-full border-x'>{children}</div>
      <SiteFooter />
    </div>
  );
}
