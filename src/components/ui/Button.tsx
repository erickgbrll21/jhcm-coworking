import Link from "next/link";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/cn";
import { FaIcon } from "@/components/ui/FaIcon";

type Variant = "primary" | "outline" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  icon?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-white/10 text-bone-50 border border-white/20 shadow-[0_4px_24px_-6px_rgba(255,255,255,0.15)] hover:bg-bone-50 hover:text-ink-950 hover:border-bone-50 hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.4)] active:scale-[0.98]",
  outline:
    "bg-transparent text-bone-50 border border-bone-50/30 hover:bg-bone-50 hover:text-ink-950 hover:border-bone-50 active:scale-[0.98]",
  ghost:
    "bg-transparent text-bone-50 border border-transparent hover:bg-white/10 hover:border-white/10 active:scale-[0.98]",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  icon = true,
}: Props) {
  const cls = cn(
    "group inline-flex min-h-[44px] max-w-full min-w-0 flex-nowrap items-center justify-center gap-x-2 rounded-full px-5 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 sm:px-7 sm:text-[12px] sm:tracking-[0.22em]",
    variants[variant],
    className
  );

  const inner = (
    <>
      <span className="min-w-0 break-words">{children}</span>
      {icon && (
        <FaIcon
          icon={faArrowUpRightFromSquare}
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
