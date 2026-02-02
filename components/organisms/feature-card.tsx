import { cn } from "@/lib/utils";
import { Content } from "@/types";

const FeatureCard = ({
  header,
  body,
  icon: Icon,
  count,
}: Content & { count: number | string }) => (
  <article className='group hover:bg-secondary relative overflow-hidden px-6 py-20 text-center transition-colors duration-500 sm:px-12 sm:text-left lg:px-18'>
    <span
      className={cn(
        "text-secondary mb-12 inline-block text-6xl font-black tabular-nums transition-colors duration-500 lg:text-7xl",
        "group-hover:text-secondary-foreground/10",
      )}
      aria-hidden='true'
    >
      {count}
    </span>
    <Icon
      aria-hidden='true'
      className='text-primary mx-auto size-(--text-5xl) sm:mr-auto sm:ml-0'
    />
    <h3 className='mb-6 text-3xl font-bold tracking-normal'>{header}</h3>
    <p
      className={cn(
        "text-secondary-foreground text-base sm:text-lg",
        "group-hover:text-secondary-foreground transition-colors duration-500",
      )}
    >
      {body}
    </p>
  </article>
);

export { FeatureCard };
