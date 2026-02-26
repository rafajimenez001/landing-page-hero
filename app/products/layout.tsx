export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-4">
      <div className="inline-block max-w-7xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}
