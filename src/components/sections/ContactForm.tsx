"use client";

import { useState } from "react";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { site } from "@/lib/site";
import { FaIcon } from "@/components/ui/FaIcon";

const services = [
  "Sala Privativa",
  "Endereço Fiscal",
  "Open Office",
  "Sala de Reunião",
  "Outro",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: services[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, sou ${form.name}.\n` +
        `E-mail: ${form.email}\n` +
        `Telefone: ${form.phone}\n` +
        `Interesse: ${form.interest}\n\n` +
        `${form.message}`
    );
    window.open(`https://wa.me/${site.whatsapp.raw}?text=${text}`, "_blank");
    setSent(true);
  };

  const inputClass =
    "w-full min-w-0 max-w-full border-b border-white/15 bg-transparent px-1 py-4 text-base text-bone-50 placeholder:text-bone-300/40 outline-none transition-colors focus:border-silver";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <label className="block text-[11px] uppercase tracking-[0.24em] text-bone-300/60 mb-2">
            Nome
          </label>
          <input
            required
            className={inputClass}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-[0.24em] text-bone-300/60 mb-2">
            E-mail
          </label>
          <input
            required
            type="email"
            className={inputClass}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <label className="block text-[11px] uppercase tracking-[0.24em] text-bone-300/60 mb-2">
            Telefone / WhatsApp
          </label>
          <input
            required
            className={inputClass}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(31) 99999-9999"
          />
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-[0.24em] text-bone-300/60 mb-2">
            Interesse
          </label>
          <select
            className={inputClass + " appearance-none cursor-pointer"}
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
          >
            {services.map((s) => (
              <option key={s} value={s} className="bg-ink-900">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-[0.24em] text-bone-300/60 mb-2">
          Mensagem
        </label>
        <textarea
          required
          rows={4}
          className={inputClass + " resize-none"}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Conte um pouco sobre o que você precisa..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="group inline-flex min-h-[48px] w-full max-w-md items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-bone-50 shadow-[0_4px_24px_-6px_rgba(255,255,255,0.15)] transition-all duration-300 hover:border-bone-50 hover:bg-bone-50 hover:text-ink-950 hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.4)] active:scale-[0.98] sm:w-auto"
        >
          {sent ? (
            <>
              <FaIcon icon={faCheck} className="h-4 w-4" /> Mensagem enviada
            </>
          ) : (
            <>
              Enviar mensagem
              <FaIcon
                icon={faPaperPlane}
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
        <p className="mt-4 text-xs text-bone-300/50">
          Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
        </p>
      </div>
    </form>
  );
}
