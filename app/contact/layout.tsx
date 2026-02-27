export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-5">
      <div className="w-full max-w-5xl text-center px-4">
        {children}
      </div>
    </section>
  );
}
