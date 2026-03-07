"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";

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

const distributors: string[] = [
  "Stryker",
  "Bonetech Medisys",
  "Medartis",
  "Citieffe",
  "HumanTech",
];

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center">

      {/* ── Hero ── */}
      <div className="w-full px-6 md:px-16 pt-16 pb-12 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[#064194] text-sm font-semibold uppercase tracking-[0.2em] mb-3"
        >
          Elite Medical
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
        >
          Nuestra{" "}
          <span className="text-[#064194]">Compañía</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
          className="text-default-500 text-base md:text-lg mt-4 leading-relaxed"
        >
          Los ejes que definen nuestra cultura y nuestra proyección.
        </motion.p>
      </div>

      {/* ── Divider ── */}

      {/* ── Cards ── */}
      <div className="container mx-auto px-6 max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 + i * 0.12 }}
            >
              <Card
                className="h-full shadow-sm border border-default-100"
                style={{ borderTop: `3px solid ${it.color}` }}
                isHoverable
              >
                <CardBody className="px-7 py-7 flex flex-col gap-4">
                  <h2 className="text-xl font-bold tracking-wide" style={{ color: it.color }}>
                    {it.title}
                  </h2>
                  {Array.isArray(it.body) ? (
                    <ul className="flex flex-col gap-2">
                      {it.body.map((item, j) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 + i * 0.12 + j * 0.07 }}
                          className="flex items-center gap-2 text-sm text-default-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: it.color }} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-default-700 leading-relaxed">{it.body}</p>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Brands ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        className="container mx-auto px-6 max-w-6xl w-full mt-20"
      >
        <div className="mb-10">
          <p className="text-[#064194] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Portafolio de Marcas
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Respaldados por{" "}
            <span className="text-[#064194]">los Mejores</span>
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-default-100 shadow-sm">
          <img
            src="/brands.png"
            alt="Nuestras marcas"
            className="w-full object-cover object-center"
          />
        </div>
      </motion.div>

      {/* ── Distributors ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.85 }}
        className="container mx-auto px-6 max-w-6xl w-full mt-20 mb-20"
      >
        {/* Section header */}
        <div className="mb-10">
          <p className="text-[#064194] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Alianzas Comerciales
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Distribuidores{" "}
            <span className="text-[#064194]">Oficiales</span>
          </h2>
        </div>

        {distributors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {distributors.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.9 + i * 0.06 }}
              >
                <Card className="border border-default-100 shadow-sm hover:shadow-md transition-shadow duration-200" style={{ borderLeft: `3px solid #064194` }}>
                  <CardBody className="px-5 py-4">
                    <p className="font-semibold text-sm text-foreground">{name}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-14 rounded-xl border border-dashed border-default-200 bg-default-50/50"
              />
            ))}
          </div>
        )}
      </motion.div>

    </section>
  );
}
