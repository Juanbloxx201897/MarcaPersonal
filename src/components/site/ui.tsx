import { icons, type LucideProps } from "lucide-react";
import type { ReactNode } from "react";

// Resuelve iconos por nombre y usa un círculo como alternativa segura si no existe el icono solicitado.
export function Icon({ name, ...p }: { name: string } & LucideProps) {
  const C = (icons as Record<string, React.ComponentType<LucideProps>>)[name] ?? icons.Circle;
  return <C {...p} />;
}

// Envuelve cada sección con su identificador, numeración, título e introducción opcional.
export function Section({
  id,
  index,
  kicker,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs tracking-widest text-primary">
          {index} <span className="text-muted-foreground">// {kicker}</span>
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

// Contenedor visual reutilizado para agrupar contenido dentro de las tarjetas del sitio.
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow ${className}`}
    >
      {children}
    </div>
  );
}

// Logotipo vectorial compuesto por las iniciales JM; el tamaño se controla desde sus propiedades.
export function Monogram({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-label="Monograma JM">
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="10"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />
      <path
        d="M13 14h9v14a6 6 0 0 1-12 0"
        className="stroke-foreground"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M26 34V14l6 9 6-9v20"
        className="stroke-primary"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
