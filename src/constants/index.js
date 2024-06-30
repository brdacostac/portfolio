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
      name: "Three JS",
      icon: threejs,
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
      name: "figma",
      icon: figma,
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dev Garden",
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