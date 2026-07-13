import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "@/components/ui/Reveal";
import { FaIcon } from "@/components/ui/FaIcon";

type Props = {
  items: string[];
  columns?: 2 | 3;
};

export function ServiceFeatures({ items, columns = 2 }: Props) {
  return (
    <ul
      className={`grid gap-5 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
    >
      {items.map((it, i) => (
        <Reveal as="li" key={it} delay={i * 0.04}>
          <div className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-5">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-silver/30 bg-silver/10 text-silver">
              <FaIcon icon={faCheck} className="h-4 w-4" />
            </span>
            <span className="min-w-0 pt-1 text-sm leading-relaxed text-bone-50/90 [overflow-wrap:anywhere]">
              {it}
            </span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
