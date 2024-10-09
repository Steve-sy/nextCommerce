export default function BlogLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-2 md:py-2">
      <div className="inline-block max-w-4xl text-left justify-center">
        {children}
      </div>
    </section>
  );
}
