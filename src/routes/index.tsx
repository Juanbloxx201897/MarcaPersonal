import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import * as S from "@/components/site/Sections";

// Configuración de la ruta principal: define metadatos SEO y el componente que la representa.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juan Pablo Monsalve Vega — Estudiante de Ingeniería Informática" },
      {
        name: "description",
        content:
          "Marca personal y portafolio de Juan Pablo Monsalve Vega: ideas que se convierten en soluciones de software.",
      },
      { property: "og:title", content: "Juan Pablo Monsalve Vega — Marca personal" },
      {
        property: "og:description",
        content:
          "Portafolio de Juan Pablo Monsalve Vega, estudiante de Ingeniería Informática con proyección a desarrollo de software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// La página combina navegación fija y secciones modulares en el orden principal del portafolio.
function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <S.Hero />
        <S.About />
        <S.Values />
        <S.MissionVision />
        <S.Swot />
        <S.ValueProp />
        <S.Reputation />
        <S.Audience />
        <S.Identity />
        <S.Strategy />
        <S.Resume />
        <S.Dreams />
        <S.Contact />
      </main>
    </div>
  );
}
