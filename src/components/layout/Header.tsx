"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { faBars, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { FaIcon } from "@/components/ui/FaIcon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 transition-all duration-500",
        open ? "z-[100]" : "z-50",
        open
          ? "bg-ink-950"
          : scrolled
            ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-xl"
            : "bg-transparent"
      )}
    >
      <div className="container flex h-[5.5rem] items-center justify-between sm:h-[5.75rem]">
        <Link href="/" className="group flex items-center gap-3">
          <Logo
            priority
            className="h-16 w-auto sm:h-[4.5rem] md:h-[4.75rem] transition-opacity group-hover:opacity-90"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors",
                  active ? "text-bone-50" : "text-bone-300/80 hover:text-bone-50"
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-silver"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={site.whatsapp.link}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-bone-50/30 bg-transparent px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-bone-50 transition-all duration-300 hover:border-bone-50 hover:bg-bone-50 hover:text-ink-950"
          >
            <FaIcon icon={faWhatsapp} className="h-3.5 w-3.5" />
            Falar agora
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone-50"
        >
          {open ? (
            <FaIcon icon={faXmark} className="h-5 w-5" />
          ) : (
            <FaIcon icon={faBars} className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 bottom-0 top-[5.5rem] z-50 overflow-y-auto overscroll-contain border-t border-white/5 bg-ink-950 sm:top-[5.75rem]"
          >
            <div className="container py-8 pb-28">
              <nav className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-white/5 py-5 text-lg font-light tracking-wide text-bone-50"
                    >
                      <span>{item.label}</span>
                      <FaIcon icon={faChevronRight} className="h-4 w-4 text-silver" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <a
                href={site.whatsapp.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bone-50 shadow-[0_4px_24px_-6px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-bone-50 hover:text-ink-950 hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.35)] active:scale-[0.98]"
              >
                <FaIcon icon={faWhatsapp} className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
