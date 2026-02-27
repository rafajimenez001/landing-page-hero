import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mt-0 pt-0">
      <div className="w-screen h-[400px] md:h-[600px] overflow-hidden">
        <Image
          src="/main.jpg"
          alt="Doctor"
          radius="none"
          className="relative -top-[200px] w-full object-cover"
        />
      </div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-25">
        <Card className="py-4 px-4" shadow="lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">¿Quiénes somos?</h1>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p className="text-default-800 text-justify">
              Empresa líder en la distribución de
              soluciones innovadoras para la salud, con 15
              años de experiencia, especializada en
              reemplazo articular, columna, trauma,
              artroscopía, cirugía robótica y más.
              Ofrecemos productos de alta calidad con un
              fuerte compromiso con la confiabilidad, la
              excelencia y la tecnología de vanguardia,
              siempre enfocados en mejorar el bienestar
              del paciente y en brindar un servicio
              profesional y ético.
            </p>
          </CardBody>
        </Card>
        <Card className="py-4 px-4" shadow="lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h1 className="text-xl font-bold">Productos</h1>
          </CardHeader>
          <CardBody className="py-2 items-center">
            <p className="text-default-800 text-justify">
              Colaboramos con las marcas líderes mundiales en el sector salud, uniendo
              innovación, calidad y confiabilidad para ofrecer soluciones de vanguardia.
            </p>
            <Button className="w-fit bg-[#064194] text-white" size="md">
              Ver Productos
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
