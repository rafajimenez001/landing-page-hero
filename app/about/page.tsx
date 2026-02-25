// app/about/page.tsx
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";

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
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] h-[800px] w-[800px] rounded-full bg-[#2c5ea0] opacity-20 blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] h-[800px] w-[800px] rounded-full bg-cyan-500 opacity-20 blur-[100px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-10 md:py-14 dark:text-default-600">
        <h1 className="mt-2 text-3xl md:text-6xl font-bold tracking-tight text-foreground dark:text-default-600">
          Nuestra compañía
        </h1>
        <p className="mt-3 max-w-none text-base md:text-2xl text-default-600 dark:text-default-600">
          Los ejes que definen nuestra cultura y nuestra proyección.
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
        <Divider className="mb-8" />
      </div>

      {/* CARDS  */}
      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 lg:px-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-stretch">
          {items.map((it) => (
            <Card
              key={it.title}
              className="border-t-4 border-t-[#2c5ea0] border-default-200/60 bg-white/80 backdrop-blur-md shadow-md dark:bg-background/60"
            >
              <CardHeader className="flex flex-col items-center gap-4 pb-2 pt-6">
                <div className="text-center">
                  <p className="text-xl font-bold uppercase tracking-widest text-[#2c5ea0]/80">
                    {it.title}
                  </p>
                </div>
              </CardHeader>

              <CardBody className="pt-0 pb-8 px-8 text-center">
                {Array.isArray(it.body) ? (
                  <ul className="flex flex-col gap-2 items-start">
                    {it.body.map((item) => (
                      <li key={item} className="text-default-600 dark:text-default-600 text-base">
                        <span className="text-[#2c5ea0] mr-2">•</span>
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
    </section>
  );
}