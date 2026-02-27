// app/about/page.tsx
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";

const items = [
  {
    title: "Misión",
    body: "Brindar soluciones de salud de alta calidad y a la vanguardia que mejoren el bienestar de las personas, guiadas por la excelencia, la confiabilidad y la ética.",
  },
  {
    title: "Visión",
    body: "Ser el distribuidor líder de soluciones de salud en México, impulsado por la innovación, la calidad y la confianza.",
  },
  {
    title: "Valores",
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
  return (
    <section className="relative w-full">
      {/* Glassmorphism Background */}
      <div className="fixed inset-0 z-0">
        <img
          alt="Modern corporate background"
          className="object-cover w-full h-full"
          src="/or.jpg"
        />
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-10 md:py-14 dark:text-default-600">
        <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-foreground dark:text-default-600">
          <span className="!text-[#064194]">Nuestra </span>Compañía
        </h1>
        <p className="mt-3 max-w-none text-base md:text-2xl dark:text-default-800 light:text-default-800">
          Los ejes que definen nuestra cultura y nuestra proyección.
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
        {/* <Divider className="mb-8" /> */}
      </div>

      {/* CARDS  */}
      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 lg:px-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-stretch">
          {items.map((it) => (
            <Card
              key={it.title}
              className=" border-default-200/60 bg-white/80 backdrop-blur-lg shadow-lg dark:bg-background/60"
              isHoverable={true}
            >
              <CardHeader className="flex flex-col items-center gap-4 pb-2 pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold tracking-widest text-[#064194]">
                    {it.title}
                  </p>
                </div>
              </CardHeader>

              <CardBody className="pt-0 pb-8 px-8 text-center">
                {Array.isArray(it.body) ? (
                  <ul className="flex flex-col gap-2 items-start">
                    {it.body.map((item) => (
                      <li key={item} className="text-default-600 dark:text-default-600 text-base">
                        <span className="text-[#4a86d8] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-default-600 dark:text-default-600 leading-relaxed text-base">
                    {it.body}
                  </p>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section >
  );
}