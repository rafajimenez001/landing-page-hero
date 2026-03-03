"use client";

import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";

const items = [
  {
    title: "Misión",
    color: "#064194",
    body: "Brindar soluciones de salud de alta calidad y a la vanguardia que mejoren el bienestar de las personas, guiadas por la excelencia, la confiabilidad y la ética.",
  },
  {
    title: "Visión",
    color: "#0077b6",
    body: "Ser el distribuidor líder de soluciones de salud en México, impulsado por la innovación, la calidad y la confianza.",
  },
  {
    title: "Valores",
    color: "#4f46e5",
    body: [
      "Honestidad",
      "Responsabilidad",
      "Ética Profesional",
      "Innovación Continua",
      "Compromiso con la Excelencia",
    ],
  },
];

export default function AboutPage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center mt-0 pt-0">

      {/* ── Hero ── */}
      <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-[#03245a]">

        {/* Soft-load image */}
        <motion.img
          src="/brands.png"
          alt="Nuestra Compañía"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-10 md:pb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="text-white/70 text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-2"
          >
            Elite Medical
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Nuestra Compañía
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.62 }}
            className="text-white/80 text-base md:text-lg mt-3 max-w-xl leading-relaxed"
          >
            Los ejes que definen nuestra cultura y nuestra proyección.
          </motion.p>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="container mx-auto px-6 py-14 max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 + i * 0.12 }}
            >
              <Card
                className="h-full shadow-md border border-default-100"
                style={{ borderTop: `4px solid ${it.color}` }}
                isHoverable
              >
                <CardBody className="px-7 py-7 flex flex-col gap-4">
                  <h2
                    className="text-2xl font-bold tracking-wide"
                    style={{ color: it.color }}
                  >
                    {it.title}
                  </h2>

                  {Array.isArray(it.body) ? (
                    <ul className="flex flex-col gap-2">
                      {it.body.map((item, j) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: "easeOut",
                            delay: 1.0 + i * 0.12 + j * 0.07,
                          }}
                          className="flex items-center gap-2 text-base text-default-700"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: it.color }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base text-default-700 leading-relaxed">
                      {it.body}
                    </p>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
