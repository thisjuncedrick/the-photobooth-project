import { Marquee, MarqueeContent, MarqueeItem } from "../ui/marquee";

const AnnouncementBar = ({ announcements }: { announcements: React.ReactNode[] }) => {
  if (!announcements.length) return null;

  return (
    <div className='w-full border-b'>
      <div className='container_ bg-primary text-primary-foreground h-12'>
        <div className='flex size-full items-center justify-center text-center text-sm'>
          <Marquee>
            <MarqueeContent speed={40}>
              {announcements.map((content, i) => (
                <MarqueeItem key={i} className='mx-18'>
                  <div>{content}</div>
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export { AnnouncementBar };
