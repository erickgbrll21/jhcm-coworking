"use client";

import { motion } from "framer-motion";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { site } from "@/lib/site";
import { FaIcon } from "@/components/ui/FaIcon";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={site.whatsapp.link}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 18 }}
      className="fixed z-40 group"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
      }}
    >
      <span className="absolute inset-0 rounded-full bg-white/20 blur-xl transition-opacity group-hover:opacity-100" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-bone-50 shadow-[0_4px_24px_-6px_rgba(255,255,255,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:border-bone-50 group-hover:bg-bone-50 group-hover:text-ink-950 group-hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.35)]">
        <FaIcon icon={faWhatsapp} className="h-6 w-6" />
      </span>
    </motion.a>
  );
}
