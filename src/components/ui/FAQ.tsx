"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/cn";
import { FaIcon } from "@/components/ui/FaIcon";

type Item = { q: string; a: string };
type Props = { items: Item[] };

export function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-white/8 border-y border-white/8">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full min-w-0 items-center justify-between gap-4 py-6 text-left group sm:gap-6 sm:py-7"
            >
              <span className="min-w-0 flex-1 font-display text-lg font-light text-bone-50 [overflow-wrap:anywhere] sm:text-xl md:text-2xl">
                {item.q}
              </span>
              <span
                className={cn(
                  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-bone-300 transition-all duration-300",
                  isOpen && "rotate-45 border-silver/60 text-silver"
                )}
              >
                <FaIcon icon={faPlus} className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-4 text-base leading-relaxed text-bone-300/75 [overflow-wrap:anywhere] sm:pb-7 sm:pr-16">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
