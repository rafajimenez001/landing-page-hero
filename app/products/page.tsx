"use client";

import { subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { motion, AnimatePresence } from "framer-motion";
import { ScanSearch, Bone, Dna, Layers, Activity, Brain, ArrowUp, Search, X, FileText } from "lucide-react";
import { useState, useEffect } from "react";

type Product = { name: string; brand: string; group: string; pdfUrl?: string };
type Category = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  products: Product[];
};

// ─── Product data ──────────────────────────────────────────────────────────────

const BONETECH_TRAUMA = "https://www.medica.de/vis-content/event-medica2025/exh-medica2025.3042813/MEDICA-2025-BONETECH-MEDISYS-PVT-LTD-Paper-medica2025.3042813-n4z8q4UlRNeSibMWCCFpmg.pdf";
const BONETECH_SPINE  = "https://www.bonetechmedisys.com/wp-content/uploads/2018/05/Spinal-Fixation-Systems.pdf";
const STRYKER_ARTHRO  = "https://www.stryker.com/content/dam/stryker/sports-medicine/products/crossflow/resources/Integrated%20Arthroscopy%20Platform.pdf";
const ELLIQUENCE_PDF  = "https://www.elliquence.com/wp-content/uploads/2016/02/Disc-FX_Brochure.pdf";

const categories: Category[] = [
  {
    id: "artroscopia",
    title: "Artroscopia",
    description:
      "Instrumental y equipos para procedimientos artroscópicos mínimamente invasivos en hombro, cadera, rodilla y pequeñas articulaciones.",
    icon: <ScanSearch className="w-7 h-7" />,
    color: "#064194",
    products: [
      { name: "Artroscopia de Hombro", brand: "STRYKER", group: "Procedimientos", pdfUrl: STRYKER_ARTHRO },
      { name: "Artroscopia de Cadera", brand: "STRYKER", group: "Procedimientos", pdfUrl: STRYKER_ARTHRO },
      { name: "Artroscopia de Rodilla", brand: "STRYKER", group: "Procedimientos", pdfUrl: STRYKER_ARTHRO },
      { name: "Pequeñas Articulaciones", brand: "STRYKER", group: "Procedimientos", pdfUrl: "https://www.stryker.com/content/dam/stryker/sports-medicine/products/conquestmanualinstruments/resources/Conquest%20brochure.pdf" },
      { name: "Balón Subacromial", brand: "STRYKER", group: "Procedimientos", pdfUrl: "https://www.stryker.com/content/dam/stryker/sports-medicine/products/inspace/images/InSpace_Brochure_1000903813RevB.pdf" },
      { name: "Artroscopio", brand: "STRYKER", group: "Equipos", pdfUrl: STRYKER_ARTHRO },
      { name: "Endoscopio", brand: "ELLIQUENCE", group: "Equipos", pdfUrl: ELLIQUENCE_PDF },
      { name: "Mesa para Cirugía Anterior", brand: "STRYKER", group: "Equipos" },
      { name: "Cama Allen para CX de Cadera", brand: "ZIMMER", group: "Equipos" },
      { name: "Silla de Playa", brand: "—", group: "Equipos" },
      { name: "Aspirador Ultrasónico", brand: "—", group: "Equipos" },
      { name: "Cortador de Hueso", brand: "VARLIX", group: "Equipos" },
      { name: "Midas Rex", brand: "MEDTRONIC", group: "Equipos", pdfUrl: "https://europe.medtronic.com/content/dam/medtronic-com/xd-en/c/midas-rex-mr-eight-high-speed-drill-system/midas-rex-mr8-product-catalogue.pdf" },
      { name: "Crioterapia", brand: "—", group: "Equipos" },
      { name: "Radiofrecuencia", brand: "ELLIQUENCE", group: "Equipos", pdfUrl: ELLIQUENCE_PDF },
      { name: "Neuromonitorización Trans Operatoria", brand: "MEDTRONIC", group: "Equipos", pdfUrl: "https://www.uab.edu/medicine/otolaryngology/images/RRD_Vendors_2021/Medtronic_NIM_Vital.pdf" },
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
    icon: <Bone className="w-7 h-7" />,
    color: "#0077b6",
    products: [
      { name: "APTUS Clavícula 2.8", brand: "MEDARTIS", group: "Sistema APTUS", pdfUrl: "https://www.medartis.com/downloadcenter_instructions/instructions/Aptus_Shoulder/EN_UK/SHOULDER-01010101_v3_Clavicle_System_2.8_Surgical_Technique_Step_by_Step.pdf" },
      { name: "APTUS Tobillo (Peroné/Tibia) 2.8/3.5", brand: "MEDARTIS", group: "Sistema APTUS", pdfUrl: "https://medartis.com/fileadmin/MDD_Archiv/EN/FOOT-01030001_v4_Ankle_Trauma_Surgical_Technique.pdf" },
      { name: "APTUS Radio Distal 2.5", brand: "MEDARTIS", group: "Sistema APTUS", pdfUrl: "https://medartis.com/fileadmin/Downloadcenter_global/Documents/Product_Information/Aptus_Wrist/01_distal_radius_system/EN/WRIST-11000001_v4_Distal_Radius_System_2.5_Product_Information.pdf" },
      { name: "APTUS Mano 1.2, 1.5, 2.0 y 2.3", brand: "MEDARTIS", group: "Sistema APTUS", pdfUrl: "https://medartis.com/fileadmin/MDD_Archiv/EN/HAND-01010001_v8_Hand_1.2-2.3_Surgical_Technique_Step_by_Step.pdf" },
      { name: "APTUS Herbert 1.7, 2.2, 3.0", brand: "MEDARTIS", group: "Sistema APTUS", pdfUrl: "https://medartis.com/fileadmin/MDD_Archiv/EN/CCS_01010001_v3_CCS_headedCCS_Surgical_Technique.pdf" },
      { name: "Clavo Centromedular Húmero", brand: "CITIEFFE", group: "Clavos Intramedulares", pdfUrl: "https://www.citieffe.com/wp-content/uploads/2021/03/TC-003A.US-rev.1.1-DT-humerus.pdf" },
      { name: "Clavo Centromedular Tibia", brand: "CITIEFFE", group: "Clavos Intramedulares", pdfUrl: "https://www.citieffe.com/wp-content/uploads/2021/04/TC-003RA.US-Rev.0-EstremoUS-2.pdf" },
      { name: "Clavo Centromedular Endovis", brand: "CITIEFFE", group: "Clavos Intramedulares", pdfUrl: "https://www.citieffe.com/wp-content/uploads/2021/03/BR-003D.EN-rev.1-Endovis-BA.pdf" },
      { name: "Clavo Centromedular Fémur", brand: "CITIEFFE", group: "Clavos Intramedulares", pdfUrl: "https://www.citieffe.com/wp-content/uploads/2021/03/BR-003D.EN-rev.1-Endovis-BA.pdf" },
      { name: "Canulados 3.0, 4.5, 5.0, 6.5 R16/R32", brand: "CITIEFFE", group: "Tornillos", pdfUrl: "https://www.citieffe.com/wp-content/uploads/2021/03/BR-008A3.US-rev.0-RONDO-3-4-5.pdf" },
      { name: "Fijador Externo (5 variantes)", brand: "CITIEFFE", group: "Fijación Externa", pdfUrl: "https://www.citieffe.com/wp-content/uploads/2023/11/BR-001US-rev0EN-X-frame.pdf" },
      { name: "DHS", brand: "BONETECH MEDISEYS", group: "Placas", pdfUrl: BONETECH_TRAUMA },
      { name: "MIS Plus", brand: "BONETECH MEDISEYS", group: "Placas", pdfUrl: BONETECH_TRAUMA },
      { name: "Placa Radio Distal", brand: "BONETECH MEDISEYS", group: "Placas", pdfUrl: BONETECH_TRAUMA },
      { name: "Aviation", brand: "BONETECH MEDISEYS", group: "Placas", pdfUrl: BONETECH_TRAUMA },
      { name: "Trauma Pequeños Fragmentos (5 placas)", brand: "BONETECH MEDISEYS", group: "Placas", pdfUrl: BONETECH_TRAUMA },
      { name: "Trauma Grandes Fragmentos (5 placas)", brand: "BONETECH MEDISEYS", group: "Placas", pdfUrl: BONETECH_TRAUMA },
      { name: "Tornillos Headless", brand: "BONETECH MEDISEYS", group: "Tornillos", pdfUrl: BONETECH_TRAUMA },
      { name: "Herbert 2.2, 3.0 y 3.5", brand: "BONETECH MEDISEYS", group: "Tornillos", pdfUrl: BONETECH_TRAUMA },
      { name: "Artrodesis de Tobillo", brand: "BONETECH MEDISEYS", group: "Artrodesis", pdfUrl: BONETECH_TRAUMA },
      { name: "Sistema de Cerclaje", brand: "STRYKER", group: "Cerclaje", pdfUrl: "https://isulmed.com/pdf/Brochures/Stryker/Sistema_de_cable_Dall_Miles-Brochure.pdf" },
      { name: "Sistema de Cerclaje", brand: "BONETECH MEDISEYS", group: "Cerclaje", pdfUrl: BONETECH_TRAUMA },
    ],
  },
  {
    id: "osteobiologicos",
    title: "Osteobiológicos",
    description:
      "Materiales biológicos para la regeneración y reparación ósea: injertos, matrices esponjosas, membranas de sellado y tejidos tendinosos.",
    icon: <Dna className="w-7 h-7" />,
    color: "#00796b",
    products: [
      { name: "Chips de Hueso (4 variantes)", brand: "Varios", group: "Injertos Óseos" },
      { name: "Matriz Esponjosa (4 variantes)", brand: "Varios", group: "Injertos Óseos" },
      { name: "Tessel", brand: "—", group: "Membranas" },
      { name: "Duragen", brand: "INTEGRA", group: "Membranas", pdfUrl: "https://products.integralife.com/file/general/1518550095.pdf" },
      { name: "Duraseal", brand: "INTEGRA", group: "Sellantes", pdfUrl: "https://www.integralife.com/file/general/1461791056.pdf" },
      { name: "Tendones (5 variantes)", brand: "Varios", group: "Tejidos" },
    ],
  },
  {
    id: "columna",
    title: "Columna",
    description:
      "Soluciones completas para cirugía de columna: fijación abierta y mínimamente invasiva, cajas intersomáticas cervicales y lumbares, prótesis de disco y vertebroplastia.",
    icon: <Layers className="w-7 h-7" />,
    color: "#4f46e5",
    products: [
      { name: "Sistema de Fijación Abierto VENUS", brand: "HUMAN TECH", group: "Sistemas de Fijación", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2021/02/venus-fixation-SGT-HumanTech-Spine.pdf" },
      { name: "Sistema de Fijación MIS VENUS", brand: "HUMAN TECH", group: "Sistemas de Fijación", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2021/02/venus-fixation-SGT-HumanTech-Spine.pdf" },
      { name: "Sistema de Fijación Cementado VENUS", brand: "HUMAN TECH", group: "Sistemas de Fijación", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2022/10/Venus_augmentation-Brochure.HumanTech.pdf" },
      { name: "Sistema de Fijación Abierto EPHORATE", brand: "BONETECH MEDISEYS", group: "Sistemas de Fijación", pdfUrl: BONETECH_SPINE },
      { name: "Sistema de Fijación MIS MISS PLUSS", brand: "BONETECH MEDISEYS", group: "Sistemas de Fijación", pdfUrl: BONETECH_SPINE },
      { name: "Sistema de Fijación Cementado MAGNIFICA", brand: "BONETECH MEDISEYS", group: "Sistemas de Fijación", pdfUrl: BONETECH_SPINE },
      { name: "Caja Cervical TRISTAN", brand: "HUMAN TECH", group: "Cajas Cervicales", pdfUrl: "https://humantech-spine.de/media/tristan_en_20200305_web.pdf" },
      { name: "Caja Cervical AVIATION", brand: "BONETECH MEDISEYS", group: "Cajas Cervicales", pdfUrl: BONETECH_SPINE },
      { name: "Caja Cervical ROI-C", brand: "ZIMMER", group: "Cajas Cervicales", pdfUrl: "https://www.zimmerbiomet.com/content/dam/zimmer-biomet/medical-professionals/spine/roi-c-cervical-cage/ROI-C%20Product%20Brochure.pdf" },
      { name: "Caja Lumbar ADONIS", brand: "HUMAN TECH", group: "Cajas Lumbares", pdfUrl: "https://humantech-spine.de/media/adonis-alif_en_20201015_.pdf" },
      { name: "Caja Lumbar MANGLIOR Recta", brand: "BONETECH MEDISEYS", group: "Cajas Lumbares", pdfUrl: BONETECH_SPINE },
      { name: "Caja Lumbar MANGLIOR Banana", brand: "BONETECH MEDISEYS", group: "Cajas Lumbares", pdfUrl: BONETECH_SPINE },
      { name: "Caja Lumbar Anterior ROI-A", brand: "ZIMMER", group: "Cajas Lumbares", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2016/07/ROI-A-Brochure.Zimmer-Biomet.pdf" },
      { name: "Caja Lumbar Lateral AVENUE L", brand: "ZIMMER", group: "Cajas Lumbares", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2020/07/Avenue%C2%AE-L-SGT-Zimmer-Biomet.pdf" },
      { name: "Placa Cervical HERRO", brand: "HUMAN TECH", group: "Placas", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2013/12/HERO-Cervical-Plate-Brochure.HumanTech.pdf" },
      { name: "Prótesis Cervical MOBI-C", brand: "ZIMMER", group: "Prótesis de Disco", pdfUrl: "https://www.zimmerbiomet.com/content/dam/zimmer-biomet/medical-professionals/spine/mobi-c-cervical-disc/Mobi-C%20Brochure.pdf" },
      { name: "Prótesis Lumbar MOBI-L", brand: "ZIMMER", group: "Prótesis de Disco", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2016/08/Mobidisc-L-Brochure.Zimmer-Biomet.pdf" },
      { name: "Ligamento DALLOS", brand: "ZIMMER", group: "Ligamentos", pdfUrl: "https://cme.ahn.org/sites/default/files/Zimmer%20Biomet%20Spine%20Portfolio.pdf" },
      { name: "Separador Intervertebral DIAM", brand: "MEDTRONIC", group: "Separadores", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2020/07/DIAM-Medtronic.pdf" },
      { name: "JOLINE Cifoplastia", brand: "HUMAN TECH", group: "Vertebroplastia", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2021/09/Ballon-Kyphoplastie-Brochure.Joline-1.pdf" },
      { name: "JOLINE Vertebroplastia", brand: "HUMAN TECH", group: "Vertebroplastia", pdfUrl: "https://thespinemarketgroup.com/wp-content/uploads/2021/09/Ballon-Kyphoplastie-Brochure.Joline-1.pdf" },
      { name: "Endoscopia", brand: "ELLICUENCE", group: "Equipos", pdfUrl: ELLIQUENCE_PDF },
      { name: "Radiofrecuencia", brand: "ELLICUENCE", group: "Equipos", pdfUrl: ELLIQUENCE_PDF },
      { name: "Tornillos Canulados", brand: "CITIEFFE", group: "Tornillos", pdfUrl: "https://www.citieffe.com/wp-content/uploads/2021/03/BR-008A3.US-rev.0-RONDO-3-4-5.pdf" },
    ],
  },
  {
    id: "reemplazo",
    title: "Reemplazo Articular",
    description:
      "Prótesis de cadera, rodilla y hombro con opciones cementadas, no cementadas y de revisión para cada necesidad clínica.",
    icon: <Activity className="w-7 h-7" />,
    color: "#b45309",
    products: [
      { name: "ACCOLLADE — Cadera No Cementada, Cabeza Cerámica", brand: "STRYKER", group: "Cadera", pdfUrl: "https://www.stryker.com/content/dam/stryker/joint-replacement/products/accoladeii/resources/Accolade%20II%20Design%20Rationale%20ACCII-PG-3_Rev-1_22894.pdf" },
      { name: "ACCOLLADE — Cadera No Cementada, Cabeza CrCo", brand: "STRYKER", group: "Cadera", pdfUrl: "https://www.stryker.com/content/dam/stryker/joint-replacement/products/accoladeii/resources/Accolade%20II%20Design%20Rationale%20ACCII-PG-3_Rev-1_22894.pdf" },
      { name: "EXETER — Cadera Cementada, Cabeza Cerámica", brand: "STRYKER", group: "Cadera", pdfUrl: "https://www.stryker.com/content/dam/stryker/joint-replacement/products/exeter/resources/EXETER-CG-4_32026_clinical-compendium.pdf" },
      { name: "EXETER — Cadera Cementada, Cabeza CrCo", brand: "STRYKER", group: "Cadera", pdfUrl: "https://www.stryker.com/content/dam/stryker/joint-replacement/products/exeter/resources/EXETER-CG-4_32026_clinical-compendium.pdf" },
      { name: "TRIDEN II — Copa Multi Orificios No Cementada", brand: "STRYKER", group: "Cadera", pdfUrl: "https://isulmed.com/pdf/Brochures/Stryker/Trident-Brochure.pdf" },
      { name: "Cadera Bipolar", brand: "STRYKER", group: "Cadera", pdfUrl: "https://www.bizwan.com/_mydoc/stryker/Hip/014%20Austin%20Moore%20&%20Thompson%20Endoprosthesis%20Surgical%20Technique.pdf" },
      { name: "Prótesis de Cadera — Revisión", brand: "STRYKER", group: "Cadera", pdfUrl: "https://isulmed.com/pdf/Brochures/Stryker/Restoration-Brochure.pdf" },
      { name: "TRIATHLON — Prótesis de Rodilla", brand: "STRYKER", group: "Rodilla", pdfUrl: "https://isulmed.com/pdf/Brochures/Stryker/triathlon-TS-Brochure.pdf" },
      { name: "PKR — Prótesis Unicompartimental de Rodilla", brand: "STRYKER", group: "Rodilla", pdfUrl: "https://www.stryker.com/content/dam/stryker/joint-replacement/systems/mako-system-overview/resources/Mako%20Partial%20Knee%20arthroplasty-%20clinical%20summary%20MAKPKA-CG-1_Rev-3_32050.pdf" },
      { name: "Prótesis de Rodilla — Revisión", brand: "STRYKER", group: "Rodilla", pdfUrl: "https://www.stryker.com/content/dam/stryker/education-and-training/joint-replacement/fellows-summit/2023-oct/files/knee/TRITS_SS_5_Rev-1_22672.pdf" },
      { name: "Prótesis de Hombro", brand: "MEDACTA", group: "Hombro", pdfUrl: "https://media.medacta.com/media/st-anatomic-shoulder-99-81as-12us-rev03.pdf" },
    ],
  },
  {
    id: "neurocirugia",
    title: "Neurocirugía",
    description:
      "Implantes y accesorios para procedimientos neuroquirúrgicos: reconstrucción craneal, clips de aneurisma, drenajes y sistemas valvulares.",
    icon: <Brain className="w-7 h-7" />,
    color: "#7c3aed",
    products: [
      { name: "Placa de Cráneo Preformada CODUBIX", brand: "ZIMMER", group: "Craneales", pdfUrl: "https://codubix.com/wp-content/uploads/sites/2/2013/04/The-evaluation-of-early-and-late-results-of-using-Codubix%C2%AE-cranial-prosthesis.pdf" },
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

// ─── Product card ──────────────────────────────────────────────────────────────

function ProductCard({ product, color, index }: { product: Product; color: string; index: number }) {
  const hasBrand = product.brand && product.brand !== "—";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: Math.min(index * 0.04, 0.5) }}
    >
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
          <div className="flex items-center justify-between gap-2 flex-wrap mt-auto">
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
            {product.pdfUrl && (
              <a
                href={product.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide transition-colors hover:opacity-80 ml-auto"
                style={{ color }}
                aria-label="Ver ficha técnica"
              >
                <FileText className="w-3 h-3" />
                PDF
              </a>
            )}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

// ─── Category section ──────────────────────────────────────────────────────────

function CategorySection({ cat, products }: { cat: Category; products: Product[] }) {
  const uniqueBrands = Array.from(
    new Set(products.map((p) => p.brand).filter((b) => b && b !== "—" && b !== "Varios"))
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product, i) => (
          <ProductCard key={`${product.name}-${i}`} product={product} color={cat.color} index={i} />
        ))}
      </div>
    </section>
  );
}

// ─── Scroll-to-top button ─────────────────────────────────────────────────────

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver arriba"
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center rounded-full bg-[#064194] text-white shadow-lg hover:bg-[#0a56c0] active:scale-95 transition-transform
            w-9 h-9 md:w-12 md:h-12"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filtered = categories
    .map((cat) => ({
      ...cat,
      products: q
        ? cat.products.filter((p) => p.name.toLowerCase().includes(q))
        : cat.products,
    }))
    .filter((cat) => cat.products.length > 0);

  const totalMatches = filtered.reduce((acc, cat) => acc + cat.products.length, 0);

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 max-w-7xl">

      {/* Hero */}
      <div className="text-center mb-8 md:mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="text-[#064194]">Nuestros </span>
          <span className="text-foreground">Productos</span>
        </h1>
        <p className={subtitle({ class: "mx-auto" })}>
          Catálogo completo de soluciones quirúrgicas de clase mundial distribuidas por Elite Medical.
        </p>
      </div>

      {/* Search bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-default-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar producto..."
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-default-200 bg-default-50 text-sm text-foreground placeholder:text-default-400 outline-none focus:border-[#064194] focus:ring-2 focus:ring-[#064194]/20 transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-default-400 hover:text-default-600 transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Quick-nav (hidden while searching) */}
      {!q && (
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
      )}

      {/* Search result count */}
      {q && (
        <p className="text-sm text-default-500 text-center mb-8">
          {totalMatches > 0
            ? `${totalMatches} producto${totalMatches !== 1 ? "s" : ""} encontrado${totalMatches !== 1 ? "s" : ""} para "${query}"`
            : `Sin resultados para "${query}"`}
        </p>
      )}

      {/* Categories */}
      <div className="flex flex-col gap-16">
        {filtered.length > 0 ? (
          filtered.map((cat) => (
            <CategorySection key={cat.id} cat={cat} products={cat.products} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-default-400 gap-3">
            <Search className="w-10 h-10 opacity-40" />
            <p className="text-base font-medium">No se encontraron productos</p>
            <button
              onClick={() => setQuery("")}
              className="text-sm text-[#064194] hover:underline"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>

      <ScrollToTopButton />
    </div>
  );
}
