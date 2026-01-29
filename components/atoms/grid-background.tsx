import { cn } from "@/lib/utils";

const GridBackground = () => {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]",
        )}
      />

      <div className='bg-background pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_40%,black)]'></div>
    </>
  );
};

export { GridBackground };
