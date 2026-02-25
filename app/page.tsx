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
      <div className="w-screen h-[500px] md:h-[500px] overflow-hidden">
        <Image
          src="/doctor.jpg"
          alt="Doctor"
          radius="none"
          className=" h-full object-cover"
        />
      </div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-25">
        <Card className="py-4 px-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">¿Quiénes somos?</h1>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p className="text-default-800">
              Nos dedicamos a la venta de dispositivos médicos necesarios para tu cirugía.
            </p>
          </CardBody>
          <CardFooter>
            <p className="text-default-400">
              Trabajamos con las mejores marcas
            </p>
          </CardFooter>
        </Card>
        <Card className="py-4 px-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h1 className="text-xl font-bold">Productos</h1>
          </CardHeader>
          <CardBody className="py-2 items-center">
            <p className="text-default-800">
              Nos dedicamos a la venta de dispositivos médicos necesarios para tu cirugía.
            </p>
            <Button className="w-fit" color="primary" size="md">
              Ver Productos
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
