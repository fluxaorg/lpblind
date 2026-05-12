import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type TechTextProps = React.ComponentProps<"div"> & {
  items: string[];
};

export function TechTextCloud({ className, items, ...props }: TechTextProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={64} reverse duration={30}>
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-zinc-500 font-mono text-sm uppercase tracking-[0.3em] whitespace-nowrap select-none"
          >
            {item}
          </span>
        ))}
      </InfiniteSlider>
    </div>
  );
}
