import { useEffect, useState } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { nav } from "@/data/content";
import { Monogram } from "./ui";

// Identificadores usados para detectar qué sección está visible durante el desplazamiento.
const allIds = [
  "inicio",
  "sobre-mi",
  "valores",
  "mision",
  "dofa",
  "propuesta",
  "reputacion",
  "publico",
  "identidad",
  "estrategia",
  "hoja-de-vida",
  "suenos",
  "contacto",
];
// Agrupa secciones secundarias bajo una opción visible en la navegación principal.
const parentOf: Record<string, string> = {
  mision: "valores",
  reputacion: "propuesta",
  estrategia: "identidad",
  "hoja-de-vida": "contacto",
  suenos: "contacto",
};

export function Nav() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Actualiza el progreso de lectura y la sección activa al desplazar la página.
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
      let cur = "inicio";
      for (const id of allIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) cur = id;
      }
      if (h.scrollTop + h.clientHeight >= h.scrollHeight - 4) cur = "contacto";
      setActive(parentOf[cur] ?? cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navega suavemente a una sección y cierra el menú móvil después de seleccionar un enlace.
  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" onClick={go("inicio")} className="flex items-center gap-2">
            <Monogram size={32} />
            <span className="font-mono text-sm text-muted-foreground">
              juan<span className="text-primary">.</span>dev
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={go(n.id)}
                className={`rounded-md px-3 py-1.5 text-sm transition ${active === n.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-border bg-background px-5 py-3 flex flex-col">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={go(n.id)}
                className={`py-2 text-sm ${active === n.id ? "text-primary" : "text-muted-foreground"}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
        <div
          className="h-0.5 bg-primary origin-left"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>
      {progress > 0.05 && (
        <button
          onClick={go("inicio")}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-50 rounded-full border border-border bg-card p-3 text-foreground shadow-lg transition hover:border-primary hover:text-primary"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
