import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "YouSpot - Decentralized Media Streaming Platform",
    description:
      "Web3 project shortlisted at Paris Blockchain Week for decentralized media verification. Web3-powered platform combining YouTube and Spotify features for streaming, sharing, and owning video/audio content.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Solidity", "Ethereum", "IPFS"],
    github: "https://github.com/divya-gupta2004/YouSpot",
    live: "https://divyanshu9329.github.io/VP/",
    features: [
      "50+ responsive UI components",
      "Upload and verify media using blockchain",
      "60% reduced server dependency",
      "Smart contract integration",
      "IPFS decentralized storage",
    ],
  },
  {
    title: "GuestNest - A Smart Guest Management System",
    description:
      "A full-stack web app with role-based authentication to manage guest check-ins and check-outs. It offers real-time data rendering, secure local storage, and an intuitive UI to reduce manual errors and streamline guest management..",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Local Storage"],
    github: "https://github.com/divya-gupta2004/GuestNest-A-Smart-Guest-Management-System",
    live: "https://guest-management-system-1.onrender.com/",
    features: [
      "1,000+ guest records management",
      "70% UI improvement",
      "Real-time data rendering",
      "Zero manual errors",
    ],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <Tilt
                key={index}
                tiltMaxAngleX={7}
                tiltMaxAngleY={7}
                perspective={1000}
                scale={1.01}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ccc"
                glarePosition="all"
                transitionSpeed={1000}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => setSelected(project)}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-600 text-indigo-700 dark:text-white rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300 space-y-1 mb-4">
                {selected.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  href={selected.github}
                  className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={selected.live}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
