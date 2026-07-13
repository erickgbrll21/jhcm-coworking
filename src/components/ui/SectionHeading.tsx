import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl min-w-0",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow max-w-full flex-wrap">
            <span className="h-px w-8 bg-silver" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="heading-display mt-5 text-3xl text-balance sm:text-4xl md:text-5xl lg:text-6xl [overflow-wrap:anywhere]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone-300/75 [overflow-wrap:anywhere] md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
