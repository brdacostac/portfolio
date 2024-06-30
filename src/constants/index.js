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
    carrent,
    jobit,
    tripguide,
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };