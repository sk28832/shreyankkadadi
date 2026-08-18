type Props = {
  index: string;
  label: string;
  blurb: string;
  delay?: string;
};

export function SectionHeading({ index, label, blurb, delay = "" }: Props) {
  return (
    <header className={`mb-8 sm:mb-10 ink-reveal-subtle ${delay}`}>
      <p className="text-stone text-xs font-serif tabular-nums mb-2">{index}</p>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
        {label}
      </h2>
      <p className="mt-3 text-brush-gray text-sm sm:text-base leading-relaxed max-w-xl">
        {blurb}
      </p>
      <div className={`studio-rule mt-6 ${delay}`} />
    </header>
  );
}
