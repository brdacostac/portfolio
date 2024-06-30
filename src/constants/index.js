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
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Experience",
      subtitle: "1 + years",
      doing : "Sofware Development",
      icon: web,
    },
    {
      title: "Education",
      subtitle: "BAC + 3",
      doing : "BUT Informatique",
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
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Le CNFPT",
      icon: cnfpt,
      iconBg: "#E6DEDD",
      date: "September 2023 - September 2024",
      points: [
        "Internal application 'Intra-Union': Adding features to optimize internships and regional communities in the AURA region.",
        "Techs: Vue.js, JavaScript, MongoDB, Node.js, Git et Docker",
      ],
    },
    {
      title: "Software Developer",
      company_name: "BeYs Sofware",
      icon: beys,
      iconBg: "#E6DEDD",
      date: "April 2023 - June 2023",
      points: [
        "Internal application 'Soyouz': Implementation of new features in the internal program, including portfolio management.",
        "Techs: Java, Angular, SpringBoot, Node.js, MongoDB, Git et Docker",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Bruno est une personne sérieuse et disciplinée avec qui j'ai eu le plaisir de collaborer sur plusieurs projets. Il se distingue par sa capacité à proposer constamment des solutions  et à être une véritable force de proposition. Bruno sait également écouter et accepter les suggestions des autres, ce qui en fait une personne avec qui il est très facile de travailler. Son esprit collaboratif et son engagement font de lui un atout précieux dans toute équipe.",
      name: "Noan Randon",
      designation: "Software Engineer Student",
      company: "ISIMA",
      image: noanrandon,
    },
    {
      testimonial:
        "Je connais Bruno depuis sept ans. Il a toujours été quelqu'un sur qui l'on peut compter. Durant ses années d'études, il a su surmonter ses difficultés avec brio. Nous avons travaillé ensemble sur plusieurs projets et Bruno a toujours démontré une grande capacité à travailler en équipe. Il sait motiver les autres pour obtenir un produit de haute qualité. Sa détermination et son esprit collaboratif sont des atouts précieux.",
      name: "Rami Khedair",
      designation: "Software Engineer Student",
      company: "INSA Lyon",
      image: ramikhedair,
    },
    {
      testimonial:
        "J'ai travaillé avec Bruno sur de nombreux projets pendant mon BUT. Bruno est extrêmement perfectionniste et n'est jamais satisfait de résultats médiocres. Avoir Bruno dans un groupe était toujours une assurance que le produit final serait le meilleur possible, tant en apparence qu'en performance. Son engagement envers l'excellence fait de lui un collaborateur précieux.",
      name: "Nicolas Franco",
      designation: "Software Developer",
      company: "CGI",
      image: nicolasfranco,
    },
    {
      testimonial:
        "Je connais Bruno depuis plusieurs années, et je peux dire sans hésitation qu'il est un développeur de qualité. Toujours sérieux et rigoureux dans son travail, Bruno fait preuve d'un grande calme face aux défis. Son approche méthodique et sa détermination assurent la qualité et la fiabilité de chaque projet sur lequel il travaille. En plus de ses compétences techniques, Bruno est toujours prêt à aider ses collègues, partageant généreusement son expertise et son temps.",
      name: "Lou Broda",
      designation: "Software Engineer Student",
      company: "ISIMA",
      image: loubroda,
    },
  ];
  
  const projects = [
    {
      name: "DevGarden",
      description:
        "Creation of DevGarden, an innovative application centralizing Git repositories (GitLab, GitHub, Gitea) into a single interface. Used Blender for 3D modeling of repositories into playful 3D trees. Developed skills in repository management, interactive UI, and agile methods.",
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
        "This mobile application allows users via an API to view Star Wars characters and view detailed descriptions of each character. It also offers the ability to save characters to a favorites list for later viewing. Additionally, our app features dark and light modes and supports both French and English languages.",
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
        "PokeBlazor is a university project developed using the Blazor framework to create a web application that allows users to play Pokémon, build their team, and engage in Pokémon battles, all while fetching data from the Pokémon API.",
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