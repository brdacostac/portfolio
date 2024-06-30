import {
  mobile,
  java,
  csharp,
  angular,
  vuejs,
  android,
  swift,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cnfpt,
  beys,
  starnative,
  pokeblazor,
  devgarden,
  threejs,
  loubroda,
  nicolasfranco,
  ramikhedair,
  noanrandon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Expérience",
    subtitle: "1 + ans",
    doing: "Software Developer",
    icon: web,
  },
  {
    title: "Éducation",
    subtitle: "BAC + 3",
    doing: "BUT Informatique",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur Full Stack",
    company_name: "Le CNFPT",
    icon: cnfpt,
    iconBg: "#E6DEDD",
    date: "Septembre 2023 - Septembre 2024",
    points: [
      "Application interne 'Intra-Union': Ajout de fonctionnalités pour optimiser les stages et les collectivités régionales de la région AURA.",
      "Technologies : Vue.js, JavaScript, MongoDB, Node.js, Git et Docker",
    ],
  },
  {
    title: "Développeur logiciel",
    company_name: "BeYs Software",
    icon: beys,
    iconBg: "#E6DEDD",
    date: "Avril 2023 - Juin 2023",
    points: [
      "Application interne 'Soyouz': Implémentation de nouvelles fonctionnalités dans le programme interne, incluant la gestion des portefeuilles.",
      "Technologies : Java, Angular, SpringBoot, Node.js, MongoDB, Git et Docker",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Bruno est une personne sérieuse et disciplinée avec qui j'ai eu le plaisir de collaborer sur plusieurs projets. Il se distingue par sa capacité à proposer constamment des solutions  et à être une véritable force de proposition. Bruno sait également écouter et accepter les suggestions des autres, ce qui en fait une personne avec qui il est très facile de travailler. Son esprit collaboratif et son engagement font de lui un atout précieux dans toute équipe.",
    name: "Noan Randon",
    designation: "Étudiant",
    company: "ISIMA",
    image: noanrandon,
  },
  {
    testimonial:
      "Je connais Bruno depuis sept ans. Il a toujours été quelqu'un sur qui l'on peut compter. Durant ses années d'études, il a su surmonter ses difficultés avec brio. Nous avons travaillé ensemble sur plusieurs projets et Bruno a toujours démontré une grande capacité à travailler en équipe. Il sait motiver les autres pour obtenir un produit de haute qualité. Sa détermination et son esprit collaboratif sont des atouts précieux.",
    name: "Rami Khedair",
    designation: "Étudiant",
    company: "INSA Lyon",
    image: ramikhedair,
  },
  {
    testimonial:
      "J'ai travaillé avec Bruno sur de nombreux projets pendant mon BUT. Bruno est extrêmement perfectionniste et n'est jamais satisfait de résultats médiocres. Avoir Bruno dans un groupe était toujours une assurance que le produit final serait le meilleur possible, tant en apparence qu'en performance. Son engagement envers l'excellence fait de lui un collaborateur précieux.",
    name: "Nicolas Franco",
    designation: "Développeur Full Stack",
    company: "CGI",
    image: nicolasfranco,
  },
  {
    testimonial:
      "Je connais Bruno depuis plusieurs années, et je peux dire sans hésitation qu'il est un développeur de qualité. Toujours sérieux et rigoureux dans son travail, Bruno fait preuve d'un grande calme face aux défis. Son approche méthodique et sa détermination assurent la qualité et la fiabilité de chaque projet sur lequel il travaille. En plus de ses compétences techniques, Bruno est toujours prêt à aider ses collègues, partageant généreusement son expertise et son temps.",
    name: "Lou Broda",
    designation: "Étudiant",
    company: "ISIMA",
    image: loubroda,
  },
];

const projects = [
  {
    name: "DevGarden",
    description:
      "Création de DevGarden, une application innovante centralisant les dépôts Git (GitLab, GitHub, Gitea) dans une interface unique. Utilisé Blender pour la modélisation 3D des dépôts en arbres 3D ludiques. Développement des compétences en gestion de dépôts, UI interactive, et méthodes agiles.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "Csharp",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: devgarden,
    source_code_link: "https://github.com/brdacostac/DevGarden",
  },
  {
    name: "Star-Native",
    description:
      "Cette application mobile permet aux utilisateurs via une API de visualiser les personnages de Star Wars et de consulter des descriptions détaillées de chaque personnage. Elle offre également la possibilité de sauvegarder des personnages dans une liste de favoris pour une consultation ultérieure.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: starnative,
    source_code_link: "https://github.com/brdacostac/Star-Native",
  },
  {
    name: "PokéBlazor",
    description:
      "PokéBlazor est un projet universitaire développé en utilisant le framework Blazor pour créer une application web permettant aux utilisateurs de jouer à Pokémon, de monter leur équipe et de faire des batailles Pokémon, tout en récupérant les données de l'API Pokémon.",
    tags: [
      {
        name: "blazor",
        color: "blue-text-gradient",
      },
      {
        name: "csharp",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pokeblazor,
    source_code_link: "https://github.com/brdacostac/Blazor-Pokemon",
  },
];

export { services, technologies, experiences, testimonials, projects };
