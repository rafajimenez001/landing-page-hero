"use client";

import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.88 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 max-w-6xl px-4">

      {/* Header */}
      <motion.h1
        {...fadeUp(0)}
        className="mt-2 text-3xl md:text-6xl font-bold tracking-tight !text-[#064194]"
      >
        Contacto
      </motion.h1>
      <motion.p {...fadeUp(0.1)} className="text-md mt-2 text-default-500">
        ¿Cómo te podemos ayudar?
      </motion.p>

      <div className="flex flex-col gap-1 mt-16">

        {/* Celaya */}
        <div className="flex flex-col md:flex-row gap-10 items-center py-6">
          <motion.div {...fadeLeft(0.15)} className="md:w-1/4">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#064194]">Celaya</h2>
          </motion.div>

          <div className="md:w-1/2 space-y-6">
            <motion.div {...fadeUp(0.2)}>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Teléfono</p>
              <p className="text-lg">+52 (461) 421 4918</p>
            </motion.div>
            <motion.div {...fadeUp(0.28)}>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Correo</p>
              <p className="text-lg break-all">elitemedical@elitemedicals.com.mx</p>
            </motion.div>
          </div>

          <motion.div {...scaleIn(0.35)} className="md:w-1/4">
            <Image src="/celaya.svg" height={200} />
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          style={{ originX: 0 }}
        >
          <Divider />
        </motion.div>

        {/* León */}
        <div className="flex flex-col md:flex-row gap-10 items-center py-10">
          <motion.div {...fadeRight(0.5)} className="md:w-1/4">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#064194]">León</h2>
          </motion.div>

          <div className="md:w-1/2 space-y-6">
            <motion.div {...fadeUp(0.55)}>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Teléfono</p>
              <p className="text-lg">+52 (477) 420 1943</p>
            </motion.div>
            <motion.div {...fadeUp(0.63)}>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Correo</p>
              <p className="text-lg break-all">cotizaciones.leon@elitemedicals.com.mx</p>
            </motion.div>
          </div>

          <motion.div {...scaleIn(0.7)} className="md:w-1/4">
            <Image src="/leon.svg" height={200} />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
