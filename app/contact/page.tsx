"use client";

import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import { useState } from "react";

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-1 items-center">
      <span className="text-base break-all text-center">{email}</span>
      <button
        onClick={handleCopy}
        className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-md border border-default-300 text-default-500 hover:bg-default-100 transition-colors"
        title="Copiar correo"
      >
        {copied ? (
          <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            Copiado
          </>
        ) : (
          <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
            Copiar
          </>
        )}
      </button>
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.88 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

export default function ContactPage() {
  return (
    <div className="flex flex-col h-full">

      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#064194] via-[#0a5bbf] to-[#1a3a6b] py-10 px-6 text-white text-center">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-white/5 blur-3xl" />

        <motion.h1
          {...fadeUp(0)}
          className="relative text-4xl md:text-6xl font-bold tracking-tight"
        >
          Contacto
        </motion.h1>
        <motion.p {...fadeUp(0.12)} className="relative mt-2 text-base text-blue-100">
          ¿Cómo te podemos ayudar?
        </motion.p>
      </div>

      {/* City cards */}
      <div className="flex-1 flex items-center bg-default-50 py-6 px-6">
        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Celaya */}
          <motion.div
            {...scaleIn(0.15)}
            className="flex flex-col items-center gap-4 rounded-2xl border border-default-200 bg-background shadow-sm p-6"
          >
            <Image src="/celaya.svg" height={100} />
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#064194]">Celaya</h2>

            <div className="w-full flex flex-col gap-4 text-center">
              <motion.div {...fadeUp(0.2)}>
                <p className="text-xs font-semibold text-default-400 uppercase tracking-wider mb-1">Correo</p>
                <CopyEmail email="elitemedical@elitemedicals.com.mx" />
              </motion.div>

              <motion.div {...fadeUp(0.28)}>
                <p className="text-xs font-semibold text-default-400 uppercase tracking-wider mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/524614214918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#25D366] hover:underline"
                >
                  +52 (461) 421 4918
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* León */}
          <motion.div
            {...scaleIn(0.25)}
            className="flex flex-col items-center gap-4 rounded-2xl border border-default-200 bg-background shadow-sm p-6"
          >
            <Image src="/leon.svg" height={100} />
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#064194]">León</h2>

            <div className="w-full flex flex-col gap-4 text-center">
              <motion.div {...fadeUp(0.35)}>
                <p className="text-xs font-semibold text-default-400 uppercase tracking-wider mb-1">Correo</p>
                <CopyEmail email="cotizaciones.leon@elitemedicals.com.mx" />
              </motion.div>

              <motion.div {...fadeUp(0.43)}>
                <p className="text-xs font-semibold text-default-400 uppercase tracking-wider mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/524774201943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#25D366] hover:underline"
                >
                  +52 (477) 420 1943
                </a>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
