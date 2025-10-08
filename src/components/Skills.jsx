// import React from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaCuttlefish, FaCode } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiVite, SiPostman, SiFirebase } from "react-icons/si";
// import { DiGit } from "react-icons/di";
// import "../styles/glassmorphism.css"; 

// const skillsData = [
//   {
//     title: "Languages",
//     skills: [
//     //   { name: "C", icon: <FaCuttlefish className="text-blue-700" /> },
//     //   { name: "C++", icon: <FaCuttlefish className="text-blue-500" /> },
//     { name: "C", icon: <span className="text-xl font-bold text-blue-700">C</span> },
//     { name: "C++", icon: <span className="text-xl font-bold text-blue-500">C++</span> },   
//     { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//     ],
//   },
//   {
//     title: "Frontend",
//     skills: [
//       { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//       { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//     //   { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//       { name: "React", icon: <FaReact className="text-cyan-400" /> },
//       { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
//     ],
//   },
//   {
//     title: "Backend & Database Management",
//     skills: [
//       { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
//       { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
//       { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//       { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
//     ],
//   },
//   {
//     title: "Tools & Utilities",
//     skills: [
//       { name: "Git", icon: <DiGit className="text-red-500" /> },
//       { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-white" /> },
//       { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
//       { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
//       { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
//     //   { name: "Vite", icon: <SiVite className="text-purple-500" /> },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="py-24 px-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
//           Technical Skills
//         </h2>

//         <div className="grid gap-12">
//           {skillsData.map((category, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//             >
//               <h3 className="text-2xl font-semibold mb-4 border-l-4 border-indigo-500 pl-3">
//                 {category.title}
//               </h3>
//               <div className="flex flex-wrap gap-6">
//                 {category.skills.map((skill, index) => (
//                   <Tilt
//                     key={index}
//                     glareEnable={true}
//                     glareMaxOpacity={0.4}
//                     glareColor="#aaa"
//                     glarePosition="all"
//                     className="glass-card shadow-md rounded-xl px-5 py-4 w-40 text-center hover:shadow-xl transition duration-300"
//                   >
//                     <div className="text-4xl mb-2 flex justify-center">{skill.icon}</div>
//                     <p className="text-sm font-medium">{skill.name}</p>
//                   </Tilt>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Coursework */}
//         <motion.div
//           className="mt-16"
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           <h3 className="text-2xl font-semibold mb-4 border-l-4 border-indigo-500 pl-3">
//             Core Skills
//           </h3>
//           <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
//             <li>Object Oriented Programming</li>
//             <li>Database Management Systems</li>
//             <li>Data Structures & Algorithms</li>
//             <li>Operating Systems</li>
//             <li>Computer Networks</li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCuttlefish,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiVite,
  SiPostman,
  SiFirebase,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import "../styles/glassmorphism.css";

const skillsData = [
  {
    title: "Languages",
    skills: [
      //   { name: "C", icon: <FaCuttlefish className="text-blue-700" /> },
      //   { name: "C++", icon: <FaCuttlefish className="text-blue-500" /> },
      {
        name: "C",
        icon: <span className="text-xl font-bold text-blue-700">C</span>,
      },
      {
        name: "C++",
        icon: <span className="text-xl font-bold text-blue-500">C++</span>,
      },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      //   { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],
  },
  {
    title: "Backend & Database Management",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    title: "Tools & Utilities",
    skills: [
      { name: "Git", icon: <DiGit className="text-red-500" /> },
      {
        name: "GitHub",
        icon: <FaGithub className="text-gray-700 dark:text-white" />,
      },
      { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      //   { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-600 dark:text-indigo-400 mb-8">
          Technical Skills
        </h2>
        <p className="text-center text-xl font-semibold mb-20">
          <span className="text-indigo-500">🚀</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 dark:from-indigo-400 dark:via-pink-400 dark:to-purple-400">
            Turning challenges into solutions through code and innovation.
          </span>
        </p>

        <div className="grid gap-12">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4 border-l-4 border-indigo-500 pl-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-6">
                {category.skills.map((skill, index) => (
                  <Tilt
                    key={index}
                    glareEnable={true}
                    glareMaxOpacity={0.4}
                    glareColor="#aaa"
                    glarePosition="all"
                    className="glass-card shadow-md rounded-xl px-5 py-4 w-40 text-center hover:shadow-xl transition duration-300"
                  >
                    <div className="text-4xl mb-2 flex justify-center">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium">{skill.name}</p>
                  </Tilt>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4 border-l-4 border-indigo-500 pl-3">
            Core Skills
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
            <li>Object Oriented Programming</li>
            <li>Database Management Systems</li>
            <li>Data Structures & Algorithms</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
