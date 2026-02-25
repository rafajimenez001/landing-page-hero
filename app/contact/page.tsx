import { title } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <h1 className="mt-2 text-3xl md:text-6xl font-bold tracking-tight text-foreground dark:text-default-600 !text-[#2c5ea0]/80">Contacto</h1>
      <p className="text-md">¿Cómo te podemos ayudar?</p>
      <div className="flex flex-col gap-12 mt-16">
        {/* Celaya Contact */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#2c5ea0]/80">Celaya</h2>
          </div>
          <div className="md:w-1/3 space-y-6">
            <div>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Teléfono</p>
              <p className="text-lg whitespace-nowrap">+52 (461) 615 2427</p>
            </div>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/qr-code-test.svg"
              height={200} />
          </div>
        </div>

        <Divider />

        {/* León Contact */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#2c5ea0]/80">León</h2>
          </div>
          <div className="md:w-1/3 space-y-6">
            <div>
              <p className="text-sm font-semibold text-default-500 uppercase tracking-wider">Teléfono</p>
              <p className="text-lg whitespace-nowrap">+52 (477) 987-6543</p>
            </div>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/qr-code-test.svg"
              height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
