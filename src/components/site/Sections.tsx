import {
  ArrowRight,
  FileText,
  Download,
  ExternalLink,
  Mail,
  Quote,
  ImagePlus,
  Terminal,
  Target,
  Eye,
  Shield,
  Lightbulb,
  AlertTriangle,
  Zap,
} from "lucide-react";
import * as d from "@/data/content";
import { Section, Card, Icon, Monogram } from "./ui";

const scroll = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// Presentación principal: combina identidad, resumen profesional, enlaces CTA y foto personal.
export function Hero() {
  const p = d.profile;
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.3fr_1fr]">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-primary">
            &gt; hola_mundo<span className="animate-pulse">_</span>
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            {p.name}
          </h1>
          <p className="mt-3 font-display text-xl text-muted-foreground">{p.title}</p>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">{p.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.interests.map((i) => (
              <span
                key={i}
                className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                #{i.toLowerCase().replace(/ /g, "_")}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#sobre-mi"
              onClick={scroll("sobre-mi")}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Conocer mi perfil <ArrowRight size={16} />
            </a>
            <a
              href="#hoja-de-vida"
              onClick={scroll("hoja-de-vida")}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/60"
            >
              <FileText size={16} /> Ver hoja de vida
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm animate-fade-up">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-glow">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">perfil.jsx</span>
            </div>
            <div className="aspect-square bg-surface-2 flex items-center justify-center">
              {p.photo ? (
                <img
                  src={p.photo}
                  alt={`Foto de ${p.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <Monogram size={120} />
                  <p className="mt-3 font-mono text-xs text-muted-foreground">
                    [ agrega tu foto en public/img ]
                  </p>
                </div>
              )}
            </div>
            <pre className="border-t border-border p-4 font-mono text-xs leading-relaxed text-muted-foreground">
              <span className="text-primary">const</span> juan = {"{"}
              {"\n"} rol: <span className="text-foreground">"dev en formación"</span>,{"\n"} estado:{" "}
              <span className="text-foreground">"aprendiendo"</span>
              {"\n"}
              {"}"};
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// Presenta el recorrido personal y resume habilidades y objetivos en formato de perfil técnico.
export function About() {
  return (
    <Section id="sobre-mi" index="01" kicker="sobre_mi" title="Sobre mí">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {d.about.paragraphs.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        <Card className="font-mono text-sm">
          <div className="mb-4 flex items-center gap-2 text-muted-foreground">
            <Terminal size={16} className="text-primary" /> ~/juan $ cat perfil.json
          </div>
          {d.about.stats.map((s) => (
            <div
              key={s.k}
              className="flex justify-between gap-4 border-b border-border/60 py-3 last:border-0"
            >
              <span className="text-primary">"{s.k}"</span>
              <span className="text-right text-foreground">{s.v}</span>
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
}

// Convierte los valores configurados en tarjetas por dimensiones funcionales, sociales y emocionales.
export function Values() {
  return (
    <Section
      id="valores"
      index="02"
      kicker="valores"
      title="Mis valores"
      intro="Tres dimensiones que definen cómo trabajo y quién soy."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {d.values.map((v) => (
          <Card key={v.key}>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name={v.icon} size={22} />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
              Valores {v.key.toLowerCase()}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            <ul className="mt-5 space-y-2">
              {v.items.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="font-mono text-primary">›</span>
                  {i}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// Diferencia visualmente el propósito actual de la meta profesional a largo plazo.
export function MissionVision() {
  return (
    <Section id="mision" index="03" kicker="mision_vision" title="Misión y visión">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-primary">
          <Target className="text-primary" />
          <p className="mt-4 font-mono text-xs text-muted-foreground">PROPÓSITO ACTUAL</p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">Misión</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{d.mission}</p>
        </Card>
        <Card className="bg-surface-2">
          <Eye className="text-foreground" />
          <p className="mt-4 font-mono text-xs text-muted-foreground">HACIA DÓNDE VOY</p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">Visión</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{d.vision}</p>
        </Card>
      </div>
    </Section>
  );
}

// Organiza fortalezas, oportunidades, debilidades y amenazas en una matriz personal DOFA.
export function Swot() {
  const q = [
    { t: "Fortalezas", l: "F", icon: Shield, items: d.swot.fortalezas, c: "text-primary" },
    {
      t: "Oportunidades",
      l: "O",
      icon: Lightbulb,
      items: d.swot.oportunidades,
      c: "text-foreground",
    },
    { t: "Debilidades", l: "D", icon: Zap, items: d.swot.debilidades, c: "text-muted-foreground" },
    {
      t: "Amenazas",
      l: "A",
      icon: AlertTriangle,
      items: d.swot.amenazas,
      c: "text-muted-foreground",
    },
  ];
  return (
    <Section
      id="dofa"
      index="04"
      kicker="matriz_dofa"
      title="Matriz DOFA personal"
      intro="Factores internos y externos que influyen en mi crecimiento."
    >
      <div className="mb-3 hidden grid-cols-2 gap-6 font-mono text-xs text-muted-foreground sm:grid">
        <span>// internos ↓ · positivos</span>
        <span>// externos ↓ · positivos</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {q.map(({ t, l, icon: I, items, c }) => (
          <Card key={t} className="relative overflow-hidden">
            <span className="absolute -right-2 -top-6 font-display text-8xl font-bold text-foreground/5">
              {l}
            </span>
            <div className={`flex items-center gap-2 ${c}`}>
              <I size={20} />
              <h3 className="font-display text-lg font-semibold">{t}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {items.map((i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  — {i}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// Explica qué aporta Juan, qué problemas puede resolver y qué valor técnico ofrece.
export function ValueProp() {
  return (
    <Section
      id="propuesta"
      index="05"
      kicker="propuesta_de_valor"
      title="Mi propuesta de valor"
      intro="Lo que aporto desde la Ingeniería Informática."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {d.valueProp.map((v, i) => (
          <Card key={v.title} className="flex gap-5">
            <span className="font-mono text-sm text-primary">0{i + 1}</span>
            <div>
              <div className="flex items-center gap-2 text-foreground">
                <Icon name={v.icon} size={18} />
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// Muestra testimonios editables; los elementos marcados como pendientes deben reemplazarse por opiniones reales autorizadas.
export function Reputation() {
  return (
    <Section
      id="reputacion"
      index="06"
      kicker="reputacion"
      title="Mi reputación actual"
      intro="Opiniones de familiares y amigos que me conocen."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {d.testimonials.map((t, i) => (
          <Card key={i} className={t.pending ? "border-dashed" : ""}>
            <div className="flex items-start justify-between">
              <Quote className="text-primary" size={22} />
              {t.pending && (
                <span className="rounded border border-primary/40 px-2 py-0.5 font-mono text-[10px] uppercase text-primary">
                  Pendiente
                </span>
              )}
            </div>
            <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {t.qualities.map((q) => (
                <span
                  key={q}
                  className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {q}
                </span>
              ))}
            </div>
            <div className="mt-5 border-t border-border pt-4">
              <p className="font-medium text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.relation}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// Describe los perfiles demográficos y necesidades de cada público objetivo.
export function Audience() {
  return (
    <Section id="publico" index="07" kicker="publico_objetivo" title="Mi público objetivo">
      <div className="grid gap-6 lg:grid-cols-2">
        {d.audiences.map((a) => (
          <Card key={a.title}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon name={a.icon} size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{a.title}</h3>
            </div>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs text-primary">demográfico</dt>
                <dd className="mt-1 text-muted-foreground">{a.demo}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-primary">psicográfico</dt>
                <dd className="mt-1 text-muted-foreground">{a.psycho}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="font-mono text-xs text-primary">necesidades</dt>
                  <dd className="mt-1 space-y-1 text-muted-foreground">
                    {a.needs.map((n) => (
                      <div key={n}>· {n}</div>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-primary">intereses</dt>
                  <dd className="mt-1 space-y-1 text-muted-foreground">
                    {a.interests.map((n) => (
                      <div key={n}>· {n}</div>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                <dt className="font-mono text-xs text-primary">cómo aporto valor</dt>
                <dd className="mt-1 text-foreground">{a.value}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// Presenta el monograma, el eslogan, la paleta y las tipografías que forman la identidad visual.
export function Identity() {
  return (
    <Section
      id="identidad"
      index="08"
      kicker="identidad_visual"
      title="Identidad visual de mi marca"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Card className="flex flex-col items-center justify-center text-center">
          <Monogram size={140} />
          <p className="mt-6 font-display text-2xl font-semibold text-foreground">
            "{d.profile.slogan}"
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Monograma <b className="text-foreground">JM</b>: la J en blanco representa la base y la
            claridad; la M en rojo, trazada como una línea continua, simboliza la energía que
            convierte ideas en soluciones. El marco redondeado evoca el ícono de una app.
          </p>
        </Card>
        <div className="space-y-6">
          <Card>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Paleta de colores
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {d.palette.map((c) => (
                <div key={c.hex}>
                  <div
                    className="h-16 rounded-lg border border-border"
                    style={{ background: c.hex }}
                  />
                  <p className="mt-2 text-sm text-foreground">{c.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{c.hex}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.meaning}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="font-display text-lg font-semibold text-foreground">Tipografía</h3>
            <div className="mt-4 space-y-4">
              {d.fonts.map((f) => (
                <div
                  key={f.name}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 pb-3 last:border-0"
                >
                  <span className={`${f.cls} text-2xl text-foreground`}>{f.name}</span>
                  <span className="text-xs text-muted-foreground">
                    <span className="font-mono text-primary">{f.role}</span> · {f.meaning}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="font-display text-lg font-semibold text-foreground">Concepto visual</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Una interfaz de desarrollador minimalista: fondo oscuro como un editor de código,
              superficies en capas, detalles monoespaciados y un acento rojo que guía la atención.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

// Resume los canales de comunicación, sus objetivos y la frecuencia recomendada.
export function Strategy() {
  return (
    <Section
      id="estrategia"
      index="09"
      kicker="estrategia_comunicacion"
      title="Estrategia de comunicación"
      intro="Acciones concretas para fortalecer mi marca y llegar a mis públicos."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {d.channels.map((c) => (
          <Card key={c.name} className="p-5">
            <Icon name={c.icon} className="text-primary" size={22} />
            <h3 className="mt-4 font-display font-semibold text-foreground">{c.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.goal}</p>
            <p className="mt-4 border-t border-border pt-3 font-mono text-xs text-foreground">
              ⏱ {c.freq}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// Proporciona acceso para abrir o descargar el PDF ubicado en la carpeta public.
export function Resume() {
  const url = d.profile.cv;
  return (
    <Section id="hoja-de-vida" index="10" kicker="hoja_de_vida" title="Hoja de vida">
      <Card className="p-0 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-3">
          <span className="font-mono text-sm text-muted-foreground">
            <FileText size={14} className="mr-2 inline text-primary" />
            hoja-de-vida.pdf
          </span>
          <div className="flex gap-2">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:border-primary/60"
            >
              <ExternalLink size={14} /> Abrir
            </a>
            <a
              href={url}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            >
              <Download size={14} /> Descargar
            </a>
          </div>
        </div>
        <object data={url} type="application/pdf" className="h-[600px] w-full bg-surface-2">
          <div className="flex h-[400px] flex-col items-center justify-center gap-2 text-center text-muted-foreground">
            <FileText size={40} className="text-primary" />
            <p>Vista previa no disponible.</p>
            <p className="font-mono text-xs">Coloca tu PDF en public/cv/hoja-de-vida.pdf</p>
          </div>
        </object>
      </Card>
    </Section>
  );
}

// Construye el tablero visual de metas usando tamaños definidos para cada tarjeta.
export function Dreams() {
  const span: Record<string, string> = {
    lg: "sm:col-span-2 sm:row-span-2",
    md: "sm:col-span-2",
    sm: "",
  };
  return (
    <Section
      id="suenos"
      index="11"
      kicker="mapa_de_suenos"
      title="Mapa de sueños"
      intro="Mi tablero de metas profesionales y personales."
    >
      <div className="grid auto-rows-[160px] grid-cols-1 gap-4 sm:grid-cols-4">
        {d.dreams.map((g, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/50 ${span[g.size]}`}
          >
            {g.image ? (
              <img
                src={g.image}
                alt={g.text}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition group-hover:opacity-80"
              />
            ) : (
              <div className="absolute inset-0 flex items-start justify-end p-4 text-muted-foreground/40">
                <ImagePlus size={18} />
              </div>
            )}
            <div className="relative flex h-full flex-col justify-end bg-gradient-to-t from-background/90 to-transparent p-5">
              <Icon name={g.icon} className="text-primary" size={g.size === "lg" ? 32 : 22} />
              <p
                className={`mt-3 font-display font-semibold text-foreground ${g.size === "lg" ? "text-2xl" : "text-base"}`}
              >
                {g.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Genera las llamadas a contacto a partir del correo y los perfiles definidos en los datos del sitio.
export function Contact() {
  const p = d.profile;
  const links = [
    { icon: Mail, label: p.email, href: `mailto:${p.email}` },
    { icon: () => <Icon name="Github" size={18} />, label: "GitHub", href: p.github },
    { icon: () => <Icon name="Linkedin" size={18} />, label: "LinkedIn", href: p.linkedin },
  ];
  return (
    <section id="contacto" className="scroll-mt-20 border-t border-border/60 py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="font-mono text-xs tracking-widest text-primary">
          12 <span className="text-muted-foreground">// contacto</span>
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-foreground">
          ¿Construimos algo juntos?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Estoy abierto a oportunidades, proyectos y conversaciones sobre tecnología.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map(({ icon: I, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm text-foreground transition hover:border-primary/60 hover:text-primary"
            >
              <I size={18} />
              {label}
            </a>
          ))}
        </div>
        <div className="mt-16 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Monogram size={24} /> © {new Date().getFullYear()} Juan Pablo Monsalve Vega · {p.slogan}
        </div>
      </div>
    </section>
  );
}
