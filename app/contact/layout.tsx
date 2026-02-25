export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-5">
      <div className="inline-block max-w-2xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}
