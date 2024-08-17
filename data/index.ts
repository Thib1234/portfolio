export const navItems = [
  { name: "À propos", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Recommandations", link: "#references" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Envie d'apprendre et de collaborer en équipe",
    description: "Je suis motivé pour apprendre rapidement et travailler en collaboration avec mes collègues pour atteindre les objectifs communs.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Capacité d'adaptation et flexibilité",
    description: "Je m'adapte facilement aux nouvelles situations et je suis toujours prêt à relever de nouveaux défis, même dans un environnement inconnu.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Passion pour le développement et la technologie",
    description: "J'aspire à acquérir et perfectionner de nouvelles compétences en fonction des besoins de l'entreprise.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Curiosité pour le développement logiciel",
    description: "J'aime explorer et apprendre les dernières technologies pour apporter de la valeur à mon équipe et à l'entreprise.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "En quête de nouvelles expériences",
    description: "Je suis prêt à travailler sur des projets innovants et à développer de nouvelles compétences dans un environnement stimulant.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Motivé à contribuer à votre entreprise",
    description: "Je suis enthousiaste à l'idée de rejoindre une équipe dynamique et de participer activement à de nouveaux projets.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "text-center justify-center md:max-w-full max-w-60",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Simulation solaire 3D",
    des: "Projet personnel développé pour mieux comprendre l'astronomie et expérimenter avec les technologies 3D.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/your-profile/solar-system",
  },
  {
    id: 2,
    title: "Application de visioconférence - Yoom",
    des: "Projet académique visant à développer une application de visioconférence simple pour améliorer la communication entre étudiants.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/your-profile/yoom-app",
  },
  {
    id: 3,
    title: "Application SaaS d'images IA",
    des: "Projet d'apprentissage personnel visant à créer une application SaaS intégrant des fonctionnalités IA.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/your-profile/ai-image-saas",
  },
  {
    id: 4,
    title: "Site web 3D d'un produit",
    des: "Projet personnel pour explorer les animations 3D et améliorer mes compétences en développement front-end.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/your-profile/3d-product-site",
  },
];

export const testimonials = [
  {
    quote:
      "Travailler avec [Nom] a été une expérience très agréable. Bien qu'il/elle soit junior, son enthousiasme et sa volonté d'apprendre ont été des atouts considérables pour notre équipe.",
    name: "Michael Johnson",
    title: "Directeur de AlphaStream Technologies",
  },
  {
    quote:
      "[Nom] est très prometteur et montre une grande capacité à s'adapter et à apprendre rapidement. Je suis convaincu(e) qu'il/elle pourra devenir un excellent développeur avec le bon encadrement.",
    name: "Sarah Lee",
    title: "Manager Technique chez XYZ Corp",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Stage en développement Frontend",
    desc: "Première expérience de développement web en utilisant React.js pour créer des interfaces interactives.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développeur d'applications mobiles (projet académique)",
    desc: "Développé des applications mobiles dans un cadre académique en utilisant des outils de développement natif pour iOS et Android.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Projet freelance (application mobile)",
    desc: "Projet personnel freelance, création d'une application mobile pour un petit client, en appliquant les bases des méthodologies agiles.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Junior Frontend Developer",
    desc: "Première expérience en tant que développeur front-end junior, participation à la création de fonctionnalités utilisateur en utilisant des technologies modernes.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia =  [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];