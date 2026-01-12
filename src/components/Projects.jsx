import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import flowstateFront from "../assets/flowstate_OS_Front.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef([]);
  // projectsRef.current = [];

  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  const projects = [
    {
      title: "YouSpot",
      description:
        "Web3 project shortlisted at Paris Blockchain Week for decentralized media verification. Web3-powered platform combining YouTube and Spotify features for streaming, sharing, and owning video/audio content.",
      image:
        "https://imgs.search.brave.com/yAubeQdr8PG3Mdo8-IJd1xMy0ZRmADdyTMGyDAwz6wg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbGVw/aDEuaW8vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDgvQ29u/dGVudC1DcmVhdGlv/bi1Bbi1JbnRyb2R1/Y3Rpb24tdG8tUGFy/dGktdGhlLVdlYjMt/UGxhdGZvcm0tVHJh/bnNmb3JtaW5nLXRo/ZS1DcmVhdG9yLUVj/b25vbXktMS5qcGc",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Solidity",
        "Ethereum",
        "IPFS",
      ],
      link: "https://divya-gupta2004.github.io/YouSpot",
      github: "https://github.com/divya-gupta2004/YouSpot",
    },
    {
      title: "DigiDine",
      description:
        "A powerful, user-friendly restaurant POS system designed to streamline order management, billing, and kitchen operations. It enables instant order processing, inventory tracking, and detailed sales analytics.",
      image:
        "https://imgs.search.brave.com/PsMeN6AvLaiTy6X4Kzuv14qR3lW5u7SGSD6JwRMuBdc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZXRy/b2JpLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wMi9j/bG9zZS11cC1iYWtl/ci1iYWtlcnktc2hv/cF8yMy0yMTQ5MjMz/NzE2LmpwZw",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay Payment",
      ],
      link: "https://your-digidine-live-link.com",
      github: "https://github.com/yourusername/DigiDine",
    },
    {
      title: "Syntrix",
      description:
        "Syntrix is an AI-powered code review platform that automatically analyzes code for best practices, detects bugs, suggests optimizations, and applies fixes in just one click — helping developers improve code quality and accelerate development.",
      image:
        "https://imgs.search.brave.com/ZgwmZKtakKvQ-KTXcnHHMC305A8_RDr5GYBliFZZLBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZXZj/b20uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzEyL2Nv/ZGUtcmV2aWV3MjAy/NS1iZy0xLmpwZy53/ZWJw",
      tags: ["React.js", "Tailwind CSS", "Gemini API"],
      link: "https://your-digidine-live-link.com",
      github: "https://github.com/divya-gupta2004/Syntrix",
    },
    {
      title: "Career Sage",
      description:
        "An AI-powered career guidance app that offers personalized recommendations, skill assessments, and career roadmaps to help users achieve professional growth and job readiness.",
      image:
        "https://imgs.search.brave.com/t1AGpt9DpTqKtJSD-9THZr7XxlcreYdzKl5qUHovL00/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzgyLzQ0LzI1/LzM2MF9GXzgyNDQy/NTE5XzNkeUtkTTBF/WHpoQk8wMjdrRExr/ZUpIdVBMZXBsTGxm/LmpwZw",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "Gemini API",
      ],
      link: "https://your-digidine-live-link.com",
      github: "https://github.com/divya-gupta2004/Careersage",
    },
    {
      title: "GuestNest",
      description:
        "Full-stack web app with role-based authentication to manage guest check-ins and check-outs. Offers real-time data rendering, secure local storage, and an intuitive UI to streamline guest management.",
      image:
        "https://imgs.search.brave.com/2NCE9P0fkN5LIcKHB77nMX_TnkKyy2XxAWcpEMxH79w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWF0cml4Ym9va2lu/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDkvU2hh/cmVkLWJ1aWxkaW5n/LXJlY2VwdGlvbnMt/MTAyNHg1NzYucG5n",
      tags: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Local Storage"],
      link: "https://guest-management-system-1.onrender.com/",
      github:
        "https://github.com/divya-gupta2004/GuestNest-A-Smart-Guest-Management-System",
    },
    {
  title: "FlowState OS",
  description:
    "Browser-based hybrid productivity workspace integrating a code editor, documentation, and notes in a single distraction-free interface. Features online code execution via Judge0 API, secure authentication, and a clean UI to improve focus and workflow efficiency.",
  image: flowstateFront,  
  tags: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Judge0 API",
  ],
  link: "https://flowstate-os-demo-link.com",
  github: "https://github.com/divya-gupta2004/FlowState-OS",
},

  ];

  useEffect(() => {
    gsap.fromTo(
      ".projects-grid", // target the entire grid
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%", // when grid comes into view
          once: true, // animate only once
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-indigo-600 dark:text-indigo-400">
            Projects
          </h2>
          <p className="text-center text-xl font-semibold mb-20">
            <span className="text-indigo-500">✨</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 dark:from-indigo-400 dark:via-pink-400 dark:to-purple-400">
              Showcasing my journey of building innovative, real-world
              applications with passion and precision.
            </span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={addToRefs}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Project Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" /> View
                    </button>
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 flex items-center gap-1"
                    >
                      <Github className="w-4 h-4" /> Code
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 mb-4">
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" /> View
                    </button>
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 flex items-center gap-1"
                    >
                      <Github className="w-4 h-4" /> Code
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

