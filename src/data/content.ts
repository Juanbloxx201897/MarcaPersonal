// Contenido editable del sitio. Modifica las variables y arreglos de este archivo para actualizar textos, enlaces e imágenes.
export const profile = {
  name: "Juan Pablo Monsalve Vega",
  title: "Estudiante de Ingeniería Informática",
  // Coloca tu foto en public/img/foto.jpg (déjalo vacío para mostrar el monograma)
  photo: "/img/imagen_personal.jpeg",
  slogan: "Ideas que se convierten en soluciones",
  summary:
    "Construyo soluciones de software con curiosidad, disciplina y foco en resolver problemas reales. Aprendo cada día para convertir ideas en proyectos funcionales.",
  interests: ["Desarrollo de software", "Tecnología", "Innovación", "Resolución de problemas"],
  email: "juanpablomonsalve454@gmail.com",
  github: "https://github.com/Juanbloxx201897",
  linkedin: "https://www.linkedin.com/in/juan-pablo-monsalve-vega-5572201b4/",
  cv: "/cv/hoja-de-vida.pdf",
};

export const about = {
  paragraphs: [
    "Soy Juan Pablo Monsalve Vega, estudiante de Ingeniería Informática. Me apasiona entender cómo funcionan las cosas y transformar ideas en software que la gente pueda usar.",
    "Me enfoco en el desarrollo de software: escribir código claro, aprender nuevas herramientas y construir proyectos que resuelvan necesidades concretas.",
    "Creo en el aprendizaje continuo. Cada proyecto es una oportunidad para mejorar, y mi meta es crecer como desarrollador aportando valor a equipos y negocios.",
  ],
  stats: [
    { k: "focus", v: "Desarrollo de software" },
    { k: "mode", v: "Aprendizaje continuo" },
    { k: "goal", v: "Desarrollador profesional" },
  ],
};

export const values = [
  {
    key: "Funcionales",
    icon: "Cpu",
    desc: "Lo que sé hacer y aporto técnicamente.",
    items: [
      "Conocimientos en informática",
      "Lógica y programación",
      "Habilidades técnicas",
      "Resolución de problemas",
    ],
  },
  {
    key: "Sociales",
    icon: "Users",
    desc: "Cómo me relaciono y trabajo con otros.",
    items: ["Responsabilidad", "Colaboración", "Respeto", "Comunicación", "Trabajo en equipo"],
  },
  {
    key: "Emocionales",
    icon: "Flame",
    desc: "Lo que me impulsa a seguir creciendo.",
    items: ["Perseverancia", "Curiosidad", "Pasión por aprender", "Compromiso personal"],
  },
];

export const mission =
  "Formarme como ingeniero informático íntegro, aprendiendo constantemente y aplicando la tecnología para crear soluciones de software útiles que aporten valor a las personas y organizaciones.";
export const vision =
  "En los próximos años, consolidarme como desarrollador de software profesional, graduado, participando en proyectos de impacto, con proyectos propios publicados y una vida personal estable y en crecimiento.";

export const swot = {
  fortalezas: [
    "Capacidad de aprendizaje rápido",
    "Pensamiento lógico y analítico",
    "Curiosidad tecnológica",
    "Responsabilidad y constancia",
  ],
  oportunidades: [
    "Alta demanda de desarrolladores",
    "Recursos y cursos abiertos",
    "Comunidades tech activas",
    "Trabajo remoto global",
  ],
  debilidades: [
    "Poca experiencia laboral",
    "Portafolio en construcción",
    "Red profesional en crecimiento",
    "Perfeccionismo en algunos casos",
  ],
  amenazas: [
    "Mercado junior competitivo",
    "Cambio tecnológico acelerado",
    "Requisitos de experiencia previa",
    "Automatización de tareas básicas",
  ],
};

export const valueProp = [
  {
    icon: "Sparkles",
    title: "Qué me diferencia",
    text: "Combino curiosidad técnica con disciplina: no me quedo en la teoría, llevo las ideas a proyectos funcionales.",
  },
  {
    icon: "Wrench",
    title: "Problemas que resuelvo",
    text: "Automatizar tareas, digitalizar procesos de pequeños negocios y construir aplicaciones web sencillas y útiles.",
  },
  {
    icon: "Code2",
    title: "Valor técnico",
    text: "Código limpio, adaptación rápida a nuevas tecnologías y enfoque en soluciones mantenibles.",
  },
  {
    icon: "TrendingUp",
    title: "Capacidad de aprendizaje",
    text: "Aprendo de forma autónoma y constante, lo que me permite crecer al ritmo que exige la industria.",
  },
];

// Opiniones reales proporcionadas por familiares y amigos.
export const testimonials = [
  {
    name: "Mi mamá",
    relation: "Familiar",
    quote:
      "Es una persona inteligente, curiosa y con muchas ganas de salir adelante. Cuando se propone algo, busca la manera de conseguirlo. A veces puede ser un poco terco, pero eso también demuestra que tiene sus propias ideas y convicciones.",
    qualities: ["Inteligente", "Curioso", "Determinado"],
    pending: false,
  },
  {
    name: "Mi papá",
    relation: "Familiar",
    quote:
      "Lo considero una persona responsable, capaz y con mucho potencial. Le gusta aprender cosas nuevas y encontrar soluciones a los problemas. Sé que tiene grandes metas y que con disciplina puede llegar muy lejos.",
    qualities: ["Responsable", "Capaz", "Potencial"],
    pending: false,
  },
  {
    name: "Un amigo",
    relation: "Amigo",
    quote:
      "Es alguien con quien se puede contar. Tiene buen sentido del humor, es espontáneo y siempre busca la manera de hacer interesantes las cosas. También es una persona que disfruta aprender y compartir lo que sabe.",
    qualities: ["Confiable", "Espontáneo", "Didáctico"],
    pending: false,
  },
  {
    name: "Un amigo",
    relation: "Amigo",
    quote:
      "Es una persona creativa, inteligente y bastante curiosa. Le gusta la tecnología y siempre está buscando aprender algo diferente. Cuando tiene un proyecto en mente, le dedica tiempo hasta conseguir lo que quiere.",
    qualities: ["Creativo", "Curioso", "Persistente"],
    pending: false,
  },
  {
    name: "Una amiga",
    relation: "Amiga",
    quote:
      "Es alguien auténtico, divertido y con una personalidad muy particular. Tiene sus propias metas, no le gusta quedarse quieto y siempre está pensando en nuevas ideas para mejorar y crecer como persona.",
    qualities: ["Auténtico", "Divertido", "Ambicioso"],
    pending: false,
  },
];

export const audiences = [
  {
    title: "Reclutadores y empresas tech",
    icon: "Briefcase",
    demo: "Profesionales de RR. HH. y líderes técnicos, 25–50 años, en empresas de software y startups.",
    psycho: "Valoran el potencial, la actitud de aprendizaje y la evidencia de proyectos reales.",
    needs: ["Talento junior confiable", "Capacidad de adaptación", "Trabajo en equipo"],
    interests: ["Portafolios en GitHub", "Habilidades técnicas", "Proyección profesional"],
    value:
      "Aporto compromiso, aprendizaje rápido y ganas de crecer dentro de un equipo de desarrollo.",
  },
  {
    title: "Emprendedores y pequeños negocios",
    icon: "Store",
    demo: "Dueños de negocios locales y emprendedores, 22–55 años, con recursos limitados.",
    psycho: "Buscan soluciones prácticas, cercanas y asequibles que les ahorren tiempo.",
    needs: ["Presencia digital", "Automatización de procesos", "Herramientas a medida"],
    interests: ["Crecimiento del negocio", "Eficiencia", "Tecnología accesible"],
    value:
      "Desarrollo soluciones simples y útiles que digitalizan su negocio y resuelven problemas concretos.",
  },
];

export const palette = [
  { name: "Fondo", hex: "#0B0D12", meaning: "Profundidad y enfoque, como un editor de código." },
  { name: "Superficie", hex: "#151922", meaning: "Capas sutiles que ordenan la información." },
  { name: "Rojo acento", hex: "#E5383B", meaning: "Pasión, energía y determinación." },
  { name: "Blanco", hex: "#F5F6F8", meaning: "Claridad y transparencia." },
  { name: "Gris", hex: "#8B93A3", meaning: "Equilibrio y discreción." },
];

export const fonts = [
  {
    name: "Space Grotesk",
    role: "Títulos",
    cls: "font-display",
    meaning: "Geométrica y moderna: personalidad tecnológica.",
  },
  {
    name: "Inter",
    role: "Textos",
    cls: "font-sans",
    meaning: "Legible y neutral para lectura cómoda.",
  },
  {
    name: "JetBrains Mono",
    role: "Detalles técnicos",
    cls: "font-mono",
    meaning: "El lenguaje del código, mi entorno diario.",
  },
];

export const channels = [
  {
    icon: "Github",
    name: "GitHub",
    goal: "Publicar proyectos y mostrar mi código.",
    freq: "1–2 commits/proyectos por semana",
  },
  {
    icon: "Globe",
    name: "Portafolio web",
    goal: "Presentar habilidades y trabajos.",
    freq: "Actualización mensual",
  },
  {
    icon: "MessagesSquare",
    name: "Comunidades tech",
    goal: "Compartir conocimientos y aprender.",
    freq: "2 participaciones por semana",
  },
  {
    icon: "Twitch",
    name: "Twitch / directos",
    goal: "Compartir mi aprendizaje y hablar de tecnología.",
    freq: "1 transmisión cada 2 semanas",
  },
  {
    icon: "Linkedin",
    name: "Contacto profesional",
    goal: "Conectar con desarrolladores y empresas.",
    freq: "1 publicación semanal",
  },
];

// Para añadir imágenes: coloca archivos en public/img/ y pon la ruta en `image`.
export const dreams = [
  { text: "Convertirme en desarrollador de software", icon: "Code2", image: "", size: "lg" },
  {
    text: "Conseguir mi primera oportunidad profesional",
    icon: "Briefcase",
    image: "",
    size: "sm",
  },
  { text: "Graduarme como ingeniero informático", icon: "GraduationCap", image: "", size: "sm" },
  { text: "Crear y publicar proyectos propios", icon: "Rocket", image: "", size: "md" },
  { text: "Fortalecer mis conocimientos tecnológicos", icon: "Brain", image: "", size: "sm" },
  { text: "Lograr estabilidad económica", icon: "Wallet", image: "", size: "sm" },
  { text: "Viajar y conocer nuevas culturas", icon: "Plane", image: "", size: "md" },
  { text: "Seguir creciendo personal y profesionalmente", icon: "Sprout", image: "", size: "lg" },
];

export const nav = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "valores", label: "Valores" },
  { id: "dofa", label: "DOFA" },
  { id: "propuesta", label: "Propuesta de valor" },
  { id: "publico", label: "Público objetivo" },
  { id: "identidad", label: "Identidad visual" },
  { id: "contacto", label: "Contacto" },
];
