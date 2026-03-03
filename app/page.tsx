"use client";

import { useState } from "react";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Años de trayectoria" },
  { value: "6",   label: "Especialidades quirúrgicas" },
  { value: "10+", label: "Marcas de clase mundial" },
];

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center mt-0 pt-0">

      {/* ── Hero ── */}
      <div className="relative w-full h-[55vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-[#03245a]">

        {/* Soft-load image */}
        <motion.img
          src="/main.jpg"
          alt="Elite Medical"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient overlay — dark at bottom, subtle at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

        {/* Hero text — anchored to bottom */}
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-10 md:pb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="text-white/70 text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-2"
          >
            Soluciones de salud de vanguardia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Elite Medical
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.62 }}
            className="text-white/80 text-base md:text-lg mt-3 max-w-xl leading-relaxed"
          >
            Distribuidores líderes de instrumental y dispositivos médicos de alta
            especialidad en México.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.78 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            <Button
              as={Link}
              href="/products"
              className="bg-[#064194] text-white font-semibold px-6"
              size="md"
              radius="full"
            >
              Ver Productos
            </Button>
            <Button
              as={Link}
              href="/about"
              variant="bordered"
              className="border-white/60 text-white font-semibold px-6 hover:bg-white/10"
              size="md"
              radius="full"
            >
              Quiénes Somos
            </Button>
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="w-full bg-[#064194]">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.9 + i * 0.1 }}
              className="flex flex-col items-center sm:px-12 py-2 sm:py-0"
            >
              <span className="text-white text-3xl font-bold leading-none">{s.value}</span>
              <span className="text-white/70 text-xs uppercase tracking-widest mt-1 font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="container mx-auto px-6 py-14 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Quiénes somos */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 1.0 }}
          >
            <Card className="h-full shadow-md border border-default-100" style={{ borderTop: "4px solid #064194" }}>
              <CardBody className="px-7 py-7 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-[#064194]">¿Quiénes somos?</h2>
                <p className="text-default-700 leading-relaxed text-sm text-justify">
                  Empresa líder en la distribución de soluciones innovadoras para la salud,
                  con 15 años de experiencia, especializada en reemplazo articular, columna,
                  trauma, artroscopía, cirugía robótica y más. Ofrecemos productos de alta
                  calidad con un fuerte compromiso con la confiabilidad, la excelencia y la
                  tecnología de vanguardia, siempre enfocados en mejorar el bienestar del
                  paciente y en brindar un servicio profesional y ético.
                </p>
                <div className="mt-auto pt-2">
                  <Button
                    as={Link}
                    href="/about"
                    variant="bordered"
                    className="border-[#064194] text-[#064194] font-semibold"
                    size="sm"
                    radius="full"
                  >
                    Conocer más
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Productos */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 1.12 }}
          >
            <Card className="h-full shadow-md border border-default-100" style={{ borderTop: "4px solid #0077b6" }}>
              <CardBody className="px-7 py-7 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-[#0077b6]">Catálogo de Productos</h2>
                <p className="text-default-700 leading-relaxed text-sm text-justify">
                  Colaboramos con las marcas líderes mundiales en el sector salud, uniendo
                  innovación, calidad y confiabilidad para ofrecer soluciones de vanguardia
                  en artroscopia, osteosíntesis, columna, reemplazo articular y neurocirugía.
                </p>
                <ul className="flex flex-col gap-1.5 mt-1">
                  {["Artroscopia", "Osteosíntesis", "Columna", "Reemplazo Articular", "Neurocirugía"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-default-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Button
                    as={Link}
                    href="/products"
                    className="bg-[#064194] text-white font-semibold"
                    size="sm"
                    radius="full"
                  >
                    Ver Productos
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
