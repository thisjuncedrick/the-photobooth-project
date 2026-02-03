import { AnnouncementBar } from "@/components/molecules/announcement-bar";
import { SiteFooter } from "@/components/organisms/site-footer";
import { announcements } from "@/config/announcement";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex flex-col'>
      <AnnouncementBar announcements={announcements} />
      <div className='container_ min-h-dvh w-full border-x'>{children}</div>
      <SiteFooter />
    </div>
  );
}
