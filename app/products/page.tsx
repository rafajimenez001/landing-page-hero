"use client";

import { subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";

type Product = { name: string; brand: string; group: string };
type Category = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  products: Product[];
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const ScopeIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
  </svg>
);

const PlateIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="10" rx="2" />
    <circle cx="7" cy="10" r="1" fill="currentColor" stroke="none" />
    <circle cx="7" cy="14" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="10" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="14" r="1" fill="currentColor" stroke="none" />
    <path d="M3 9h18M3 15h18" strokeOpacity={0.3} />
  </svg>
);

const LeafIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6 2 2 6 2 12s4 10 10 10c2 0 4-1 5.5-2.5C21 16 22 13 22 10 22 5 18 2 12 2z" />
    <path d="M12 2c0 6-4 10-10 10" />
    <line x1="12" y1="22" x2="12" y2="12" />
  </svg>
);

const SpineIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="5" rx="1" />
    <rect x="8" y="9.5" width="8" height="5" rx="1" />
    <rect x="8" y="17" width="8" height="5" rx="1" />
    <line x1="12" y1="7" x2="12" y2="9.5" />
    <line x1="12" y1="14.5" x2="12" y2="17" />
  </svg>
);

const JointIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3C9 3 7 5 7 8v2" />
    <path d="M12 21c3 0 5-2 5-5v-2" />
    <circle cx="12" cy="12" r="4" />
    <path d="M7 10a5 5 0 0 0 10 0" />
    <path d="M7 14a5 5 0 0 0 10 0" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a7 7 0 0 0-7 7c0 2.2 1 4.1 2.6 5.4" />
    <path d="M12 5a7 7 0 0 1 7 7c0 2.2-1 4.1-2.6 5.4" />
    <path d="M9 12a3 3 0 0 0 6 0" />
    <path d="M5 12H3M21 12h-2" />
    <path d="M7.6 17.4L6.2 18.8M17.8 5.2l-1.4 1.4" />
    <path d="M12 19v2" />
  </svg>
);

// ─── Product data ──────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: "artroscopia",
    title: "Artroscopia",
    description:
      "Instrumental y equipos para procedimientos artroscópicos mínimamente invasivos en hombro, cadera, rodilla y pequeñas articulaciones.",
    icon: <ScopeIcon />,
    color: "#064194",
    products: [
      { name: "Artroscopia de Hombro", brand: "STRYKER", group: "Procedimientos" },
      { name: "Artroscopia de Cadera", brand: "STRYKER", group: "Procedimientos" },
      { name: "Artroscopia de Rodilla", brand: "STRYKER", group: "Procedimientos" },
      { name: "Pequeñas Articulaciones", brand: "STRYKER", group: "Procedimientos" },
      { name: "Balón Subacromial", brand: "STRYKER", group: "Procedimientos" },
      { name: "Artroscopio", brand: "STRYKER", group: "Equipos" },
      { name: "Endoscopio", brand: "ELLIQUENCE", group: "Equipos" },
      { name: "Mesa para Cirugía Anterior", brand: "STRYKER", group: "Equipos" },
      { name: "Cama Allen para CX de Cadera", brand: "ZIMMER", group: "Equipos" },
      { name: "Silla de Playa", brand: "—", group: "Equipos" },
      { name: "Aspirador Ultrasónico", brand: "—", group: "Equipos" },
      { name: "Cortador de Hueso", brand: "VARLIX", group: "Equipos" },
      { name: "Midas Rex", brand: "MEDTRONIC", group: "Equipos" },
      { name: "Crioterapia", brand: "—", group: "Equipos" },
      { name: "Radiofrecuencia", brand: "ELLIQUENCE", group: "Equipos" },
      { name: "Neuromonitorización Trans Operatoria", brand: "MEDTRONIC", group: "Equipos" },
      { name: "Cabezal Doro", brand: "—", group: "Equipos" },
      { name: "Cabezal Mayfield", brand: "—", group: "Equipos" },
      { name: "Neuronavegación", brand: "NAVIAN", group: "Equipos" },
      { name: "Sistemas Tubulares", brand: "MEDFIX", group: "Equipos" },
    ],
  },
  {
    id: "osteosintesis",
    title: "Osteosíntesis",
    description:
      "Sistemas de fijación ósea: placas, clavos intramedulares, tornillos canulados y fijadores externos para trauma y fracturas.",
    icon: <PlateIcon />,
    color: "#0077b6",
    products: [
      { name: "APTUS Clavícula 2.8", brand: "MEDARTIS", group: "Sistema APTUS" },
      { name: "APTUS Tobillo (Peroné/Tibia) 2.8/3.5", brand: "MEDARTIS", group: "Sistema APTUS" },
      { name: "APTUS Radio Distal 2.5", brand: "MEDARTIS", group: "Sistema APTUS" },
      { name: "APTUS Mano 1.2, 1.5, 2.0 y 2.3", brand: "MEDARTIS", group: "Sistema APTUS" },
      { name: "APTUS Herbert 1.7, 2.2, 3.0", brand: "MEDARTIS", group: "Sistema APTUS" },
      { name: "Clavo Centromedular Húmero", brand: "CITIEFFE", group: "Clavos Intramedulares" },
      { name: "Clavo Centromedular Tibia", brand: "CITIEFFE", group: "Clavos Intramedulares" },
      { name: "Clavo Centromedular Endovis", brand: "CITIEFFE", group: "Clavos Intramedulares" },
      { name: "Clavo Centromedular Fémur", brand: "CITIEFFE", group: "Clavos Intramedulares" },
      { name: "Canulados 3.0, 4.5, 5.0, 6.5 R16/R32", brand: "CITIEFFE", group: "Tornillos" },
      { name: "Fijador Externo (5 variantes)", brand: "CITIEFFE", group: "Fijación Externa" },
      { name: "DHS", brand: "BONETECH MEDISEYS", group: "Placas" },
      { name: "MIS Plus", brand: "BONETECH MEDISEYS", group: "Placas" },
      { name: "Placa Radio Distal", brand: "BONETECH MEDISEYS", group: "Placas" },
      { name: "Aviation", brand: "BONETECH MEDISEYS", group: "Placas" },
      { name: "Trauma Pequeños Fragmentos (5 placas)", brand: "BONETECH MEDISEYS", group: "Placas" },
      { name: "Trauma Grandes Fragmentos (5 placas)", brand: "BONETECH MEDISEYS", group: "Placas" },
      { name: "Tornillos Headless", brand: "BONETECH MEDISEYS", group: "Tornillos" },
      { name: "Herbert 2.2, 3.0 y 3.5", brand: "BONETECH MEDISEYS", group: "Tornillos" },
      { name: "Artrodesis de Tobillo", brand: "BONETECH MEDISEYS", group: "Artrodesis" },
      { name: "Sistema de Cerclaje", brand: "STRYKER", group: "Cerclaje" },
      { name: "Sistema de Cerclaje", brand: "BONETECH MEDISEYS", group: "Cerclaje" },
    ],
  },
  {
    id: "osteobiologicos",
    title: "Osteobiológicos",
    description:
      "Materiales biológicos para la regeneración y reparación ósea: injertos, matrices esponjosas, membranas de sellado y tejidos tendinosos.",
    icon: <LeafIcon />,
    color: "#00796b",
    products: [
      { name: "Chips de Hueso (4 variantes)", brand: "Varios", group: "Injertos Óseos" },
      { name: "Matriz Esponjosa (4 variantes)", brand: "Varios", group: "Injertos Óseos" },
      { name: "Tessel", brand: "—", group: "Membranas" },
      { name: "Duragen", brand: "—", group: "Membranas" },
      { name: "Duraseal", brand: "—", group: "Sellantes" },
      { name: "Tendones (5 variantes)", brand: "Varios", group: "Tejidos" },
    ],
  },
  {
    id: "columna",
    title: "Columna",
    description:
      "Soluciones completas para cirugía de columna: fijación abierta y mínimamente invasiva, cajas intersomáticas cervicales y lumbares, prótesis de disco y vertebroplastia.",
    icon: <SpineIcon />,
    color: "#4f46e5",
    products: [
      { name: "Sistema de Fijación Abierto VENUS", brand: "HUMAN TECH", group: "Sistemas de Fijación" },
      { name: "Sistema de Fijación MIS VENUS", brand: "HUMAN TECH", group: "Sistemas de Fijación" },
      { name: "Sistema de Fijación Cementado VENUS", brand: "HUMAN TECH", group: "Sistemas de Fijación" },
      { name: "Sistema de Fijación Abierto EPHORATE", brand: "BONETECH MEDISEYS", group: "Sistemas de Fijación" },
      { name: "Sistema de Fijación MIS MISS PLUSS", brand: "BONETECH MEDISEYS", group: "Sistemas de Fijación" },
      { name: "Sistema de Fijación Cementado MAGNIFICA", brand: "BONETECH MEDISEYS", group: "Sistemas de Fijación" },
      { name: "Caja Cervical TRISTAN", brand: "HUMAN TECH", group: "Cajas Cervicales" },
      { name: "Caja Cervical AVIATION", brand: "BONETECH MEDISEYS", group: "Cajas Cervicales" },
      { name: "Caja Cervical ROI-C", brand: "ZIMMER", group: "Cajas Cervicales" },
      { name: "Caja Lumbar ADONIS", brand: "HUMAN TECH", group: "Cajas Lumbares" },
      { name: "Caja Lumbar MANGLIOR Recta", brand: "BONETECH MEDISEYS", group: "Cajas Lumbares" },
      { name: "Caja Lumbar MANGLIOR Banana", brand: "BONETECH MEDISEYS", group: "Cajas Lumbares" },
      { name: "Caja Lumbar Anterior ROI-A", brand: "ZIMMER", group: "Cajas Lumbares" },
      { name: "Caja Lumbar Lateral AVENUE L", brand: "ZIMMER", group: "Cajas Lumbares" },
      { name: "Placa Cervical HERRO", brand: "HUMAN TECH", group: "Placas" },
      { name: "Prótesis Cervical MOBI-C", brand: "ZIMMER", group: "Prótesis de Disco" },
      { name: "Prótesis Lumbar MOBI-L", brand: "ZIMMER", group: "Prótesis de Disco" },
      { name: "Ligamento DALLOS", brand: "ZIMMER", group: "Ligamentos" },
      { name: "Separador Intervertebral DIAM", brand: "MEDTRONIC", group: "Separadores" },
      { name: "JOLINE Cifoplastia", brand: "HUMAN TECH", group: "Vertebroplastia" },
      { name: "JOLINE Vertebroplastia", brand: "HUMAN TECH", group: "Vertebroplastia" },
      { name: "Endoscopia", brand: "ELLICUENCE", group: "Equipos" },
      { name: "Radiofrecuencia", brand: "ELLICUENCE", group: "Equipos" },
      { name: "Tornillos Canulados", brand: "CITIEFFE", group: "Tornillos" },
    ],
  },
  {
    id: "reemplazo",
    title: "Reemplazo Articular",
    description:
      "Prótesis de cadera, rodilla y hombro con opciones cementadas, no cementadas y de revisión para cada necesidad clínica.",
    icon: <JointIcon />,
    color: "#b45309",
    products: [
      { name: "ACCOLLADE — Cadera No Cementada, Cabeza Cerámica", brand: "STRYKER", group: "Cadera" },
      { name: "ACCOLLADE — Cadera No Cementada, Cabeza CrCo", brand: "STRYKER", group: "Cadera" },
      { name: "EXETER — Cadera Cementada, Cabeza Cerámica", brand: "STRYKER", group: "Cadera" },
      { name: "EXETER — Cadera Cementada, Cabeza CrCo", brand: "STRYKER", group: "Cadera" },
      { name: "TRIDEN II — Copa Multi Orificios No Cementada", brand: "STRYKER", group: "Cadera" },
      { name: "Cadera Bipolar", brand: "STRYKER", group: "Cadera" },
      { name: "Prótesis de Cadera — Revisión", brand: "STRYKER", group: "Cadera" },
      { name: "TRIATHLON — Prótesis de Rodilla", brand: "STRYKER", group: "Rodilla" },
      { name: "PKR — Prótesis Unicompartimental de Rodilla", brand: "STRYKER", group: "Rodilla" },
      { name: "Prótesis de Rodilla — Revisión", brand: "STRYKER", group: "Rodilla" },
      { name: "Prótesis de Hombro", brand: "MEDACTA", group: "Hombro" },
    ],
  },
  {
    id: "neurocirugia",
    title: "Neurocirugía",
    description:
      "Implantes y accesorios para procedimientos neuroquirúrgicos: reconstrucción craneal, clips de aneurisma, drenajes y sistemas valvulares.",
    icon: <BrainIcon />,
    color: "#7c3aed",
    products: [
      { name: "Placa de Cráneo Preformada CODUBIX", brand: "ZIMMER", group: "Craneales" },
      { name: "Placa para Cráneo", brand: "VARLIX", group: "Craneales" },
      { name: "Malla para Cráneo", brand: "VARLIX", group: "Craneales" },
      { name: "Craneofix", brand: "—", group: "Craneales" },
      { name: "Clips de Aneurisma", brand: "VARLIX", group: "Clips" },
      { name: "Drenaje Subdural", brand: "—", group: "Drenajes" },
      { name: "Válvulas (6 variantes)", brand: "Varios", group: "Válvulas" },
    ],
  },
];

// ─── Animation variants ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

// ─── Product card ──────────────────────────────────────────────────────────────

function ProductCard({ product, color }: { product: Product; color: string }) {
  const hasBrand = product.brand && product.brand !== "—";
  return (
    <motion.div variants={cardVariants}>
      <Card
        className="h-full border border-default-100 shadow-sm hover:shadow-md transition-shadow duration-200"
        style={{ borderLeft: `4px solid ${color}` }}
      >
        <CardHeader className="pb-1 pt-3 px-4 flex-col items-start gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-default-400">
            {product.group}
          </span>
        </CardHeader>
        <CardBody className="px-4 pt-0 pb-4 flex flex-col gap-2">
          <p className="font-semibold text-sm text-foreground leading-snug">
            {product.name}
          </p>
          {hasBrand && (
            <Chip
              size="sm"
              variant="flat"
              style={{ backgroundColor: `${color}18`, color }}
              classNames={{ content: "font-semibold text-[10px] tracking-wide" }}
            >
              {product.brand}
            </Chip>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}

// ─── Category section ──────────────────────────────────────────────────────────

function CategorySection({ cat }: { cat: Category }) {
  const uniqueBrands = Array.from(
    new Set(cat.products.map((p) => p.brand).filter((b) => b && b !== "—" && b !== "Varios"))
  );

  return (
    <section id={cat.id} className="scroll-mt-20">
      {/* Section header */}
      <div
        className="rounded-2xl px-6 py-6 mb-6"
        style={{ background: `linear-gradient(135deg, ${cat.color}12 0%, ${cat.color}06 100%)` }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span
            className="flex items-center justify-center w-11 h-11 rounded-xl"
            style={{ backgroundColor: `${cat.color}1a`, color: cat.color }}
          >
            {cat.icon}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: cat.color }}>
            {cat.title}
          </h2>
        </div>
        <p className="text-default-500 text-sm md:text-base leading-relaxed max-w-2xl mb-4">
          {cat.description}
        </p>
        {uniqueBrands.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-default-400 self-center font-medium">Marcas:</span>
            {uniqueBrands.map((brand) => (
              <Chip
                key={brand}
                size="sm"
                variant="bordered"
                style={{ borderColor: `${cat.color}50`, color: cat.color }}
                classNames={{ content: "text-[10px] font-semibold tracking-wide" }}
              >
                {brand}
              </Chip>
            ))}
          </div>
        )}
      </div>

      {/* Product grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {cat.products.map((product, i) => (
          <ProductCard key={`${product.name}-${i}`} product={product} color={cat.color} />
        ))}
      </motion.div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 max-w-7xl">

      {/* Hero */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="text-[#064194]">Nuestros </span>
          <span className="text-foreground">Productos</span>
        </h1>
        <p className={subtitle({ class: "mx-auto" })}>
          Catálogo completo de soluciones quirúrgicas de clase mundial distribuidas por Elite Medical.
        </p>
      </div>

      {/* Quick-nav */}
      <nav className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:opacity-80"
            style={{
              borderColor: `${cat.color}40`,
              color: cat.color,
              backgroundColor: `${cat.color}0d`,
            }}
          >
            <span className="w-4 h-4 flex items-center justify-center">
              {cat.icon}
            </span>
            {cat.title}
          </a>
        ))}
      </nav>

      {/* Categories */}
      <div className="flex flex-col gap-16">
        {categories.map((cat) => (
          <CategorySection key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
}
