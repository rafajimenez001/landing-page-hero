import { title } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 max-w-6xl">
      <h1 className="mt-2 text-3xl md:text-6xl font-bold tracking-tight text-foreground dark:text-default-600 !text-[#064194]">Contacto</h1>

      <p className="text-md">¿Cómo te podemos ayudar?</p>
      <div className="flex flex-col gap-1 mt-16">
        {/* Celaya Contact */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#064194]">Celaya</h2>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Teléfono</p>
              <p className="text-lg">+52 (461) 421 4918</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Correo</p>
              <p className="text-lg break-all">elitemedical@elitemedicals.com.mx</p>
            </div>
          </div>
          <div className="md:w-1/4">
            <Image
              src="/celaya.svg"
              height={200} />
          </div>
        </div>

        <Divider />

        {/* León Contact */}
        <div className="flex flex-col md:flex-row gap-10 items-center py-10">
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#064194]">León</h2>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Teléfono</p>
              <p className="text-lg">+52 (477) 420 1943</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Correo</p>
              <p className="text-lg break-all">cotizaciones.leon@elitemedicals.com.mx</p>
            </div>
          </div>
          <div className="md:w-1/4">
            <Image
              src="/leon.svg"
              height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
