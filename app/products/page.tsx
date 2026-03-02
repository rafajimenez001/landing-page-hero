import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";

const products = [
  {
    title: "Kit de Precisión Quirúrgica",
    category: "Cirugía",
    description: "Instrumentos quirúrgicos de última generación diseñados para procedimientos mínimamente invasivos con mangos ergonómicos.",
  },
  {
    title: "Monitor de Ondas Cardíacas",
    category: "Diagnósticos",
    description: "Sistema de monitoreo cardíaco en tiempo real impulsado por IA con sincronización en la nube y alertas de emergencia.",
  },
  {
    title: "OmniScan Pro",
    category: "Imagenología",
    description: "Dispositivo portátil de ultrasonido e imágenes con resolución de alta definición e interfaz intuitiva.",
  },
  {
    title: "MedStation Elite",
    category: "Infraestructura",
    description: "Estación de trabajo médica integrada para una gestión fluida de los datos del paciente y planificación quirúrgica.",
  },
];

export default function ProductsPage() {
  return (
    <section className="container mx-auto px-6 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-foreground dark:text-default-600">
          <span className="!text-[#064194]">Nuestros </span>Productos
        </h1>
        <p className={subtitle({ class: "mt-4" })}>
          Innovación médica a tu alcance: Nuestro catálogo de marcas premium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product, index) => (
          <Card key={index} className="py-4" isFooterBlurred>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <div className="flex justify-between w-full items-center mb-2">
                <Chip size="sm" variant="flat" color="primary">
                  {product.category}
                </Chip>
              </div>
              <h4 className="font-bold text-large">{product.title}</h4>
              <p className="text-left text-tiny font-bold text-default-400 mt-1">{product.description}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
            </CardBody>
            <CardFooter className="justify-center">
              <Button className="bg-[#4a86d8] text-white" radius="full" size="sm">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
