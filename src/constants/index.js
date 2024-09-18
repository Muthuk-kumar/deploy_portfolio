import {
    mobile,
    backend,
    creator,
    web,
    firmware,
    hardware,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,

    arduino,
    stm32,
    c_lang,
    cpp,
    linux,
    Kicad,
    rtos,
    matlab,
    TensorFlow,
    Keras,
    Ai,
    qzsi,
    iems,
    balance,
    aci
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
      title: "Firmware Engineer",
      icon: firmware,
    },
    {
      title: "Electronics Design Engineer",
      icon: hardware,
    }
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c_lang,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "MatLab",
      icon: matlab,
    },
    {
      name: "STM32",
      icon: stm32,
    },
    {
      name: "Arduino",
      icon: arduino,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Kicad",
      icon: Kicad,
    },
    {
      name: "TensorFlow",
      icon: TensorFlow,
    },
    {
      name: "Keras",
      icon: Keras,
    },
    {
      name: "free RTOS",
      icon: rtos,
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
      title: "Embedded Systems Engineer Intern",
      company_name: "Ai-DEA Labs PVT LTD",
      icon: Ai,
      iconBg: "#ffffff",
      date: "Jun 2023 - July 2023",
      points: [
        "Designed and built an Arduino-based data logger tester for handling various digital and analog inputs, including voltage (0-5V) and current (4-20mA).",
        "Integrated a Nextion display and created a custom user interface for easy interaction and data visualization.",
        "Documented the entire project, covering design details, code, and testing procedures.",
        "Performed extensive testing to verify reliable performance and accurate data.",
      ],
    },
    {
      title: "Firmware Developer Intern",
      company_name: "ACI AUTOMATION Pvt Ltd",
      icon: aci,
      iconBg: "#ffffff",
      date: "Jan 2024 - Jul 2024",
      points: [
        "Connected a precise converter to a microcontroller, making the system 40% faster at reading data and 35% more accurate for measuring weights.",
        "Created controls for different tasks in factories, like filling containers, turning devices on and off, and making sure mistakes are avoided.",
        "Set up standard communication methods to ensure the system reliably sends and receives data without errors.",
        "Developed methods to clean up and adjust sensor signals, cutting down noise by 15% and improving the accuracy of weight measurements by 20%",
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
      name: "Intelligent Energy Management system",
      description:
        "Real-time electricity consumption prediction with LSTM on a Raspberry Pi, analyzed and visualized using InfluxDB and Grafana.",
      tags: [
        {
          name: "TensorFlow",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "Kicad",
          color: "pink-text-gradient",
        },
      ],
      image: iems,
      source_code_link: "https://github.com/",
    },
    {
      name: "Impedance Sizing and Lifetime prediction of QZSI using BBN",
      description:
        "Computed QZSI lifetime with Bayesian Belief Networks, developed an ANN model for impedance network sizing, and the Artificial Bee Colony algorithm for MPPT.",
      tags: [
        {
          name: "MATLAB",
          color: "blue-text-gradient",
        },
        {
          name: "C/C++",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: qzsi,
      source_code_link: "https://github.com/",
    },
    {
      name: "Balancing Robot",
      description:
        "Engineered a fast self-balancing robot leveraging the reaction wheel principle to achieve dynamic stability and precise control.",
      tags: [
        {
          name: "Arduino/C++",
          color: "blue-text-gradient",
        },
        {
          name: "Kicad",
          color: "green-text-gradient",
        },
        {
          name: "Matlab",
          color: "pink-text-gradient",
        },
      ],
      image: balance,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };