import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaLaptopCode,
  FaCrown,
  FaCodeBranch,
} from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
// import profileImage from "../assets/profile.jpg";
import profileImage from "../assets/divya.png";

const timelineData = [
  {
    year: "2020",
    title: "Completed 10th",
    desc: "Built my foundation in learning and discipline at St. Joseph’s Convent Girls’ Sr. Sec. School.",
    icon: <MdOutlineSchool className="text-2xl" />,
    gradient:
      "bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-black",
  },
  {
    year: "2022",
    title: "Completed 12th",
    desc: "Graduated from Wisdom Public School, strengthening my love for problem solving.",
    icon: <MdOutlineSchool className="text-2xl" />,
    gradient:
      "bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 text-black",
  },
  {
    year: "2022",
    title: "Started B.Tech",
    desc: "Began my undergraduate journey at AITR Indore with passion for innovation and technology.",
    icon: <FaUniversity className="text-2xl" />,
    gradient:
      "bg-gradient-to-r from-green-200 via-green-300 to-green-400 text-black",
  },
  {
    year: "June 2024",
    title: "Blockchain Technology Club",
    desc: "Became Vice President, leading initiatives, events, and driving blockchain awareness.",
    icon: <FaCodeBranch className="text-2xl" />,
    gradient:
      "bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-black",
  },
  {
    year: "Dec 2024",
    title: "First Hackathon Win",
    desc: "Achieved my first hackathon victory, turning ideas into impactful solutions.",
    icon: <FaCrown className="text-2xl" />,
    gradient:
      "bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 text-black",
  },
  {
    year: "Present",
    title: "Full-Stack MERN Journey",
    desc: "Diving deep into building modern web apps with the MERN stack.",
    icon: <FaLaptopCode className="text-2xl" />,
    gradient:
      "bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-400 text-black",
  },
];

const beyondCode = [
  {
    title: "Lifelong Learner",
    desc: "Committed to learning and evolving every single day.",
    emoji: "📚",
  },
  {
    title: "Team-Oriented",
    desc: "Success comes through shared vision and collaboration.",
    emoji: "🤝",
  },
  {
    title: "Problem Solver",
    desc: "Tackling challenges with logic and creativity.",
    emoji: "🧠",
  },
  {
    title: "Growth Mindset",
    desc: "Always looking to push my limits and improve.",
    emoji: "🚀",
  },
  {
    title: "Creative Coder",
    desc: "Blending design and development for unique experiences.",
    emoji: "🎨",
  },
  {
    title: "Passion in Action",
    desc: "Putting heart into every project I build.",
    emoji: "🌟",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center md:text-5xl text-indigo-600 dark:text-indigo-400 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <p className="text-center text-xl font-semibold mb-20">
          <span className="text-indigo-500">✨</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 dark:from-indigo-400 dark:via-pink-400 dark:to-purple-400">
            My journey is about passion, learning, and creating meaningful
            impact.
          </span>
        </p>

        {/* Intro */}
        <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden">
          {/* Animated Profile Section */}
          <motion.div
            className="relative flex justify-center items-center md:w-1/2"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            {/* Glowing background aura */}
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(147,51,234,0.4), rgba(79,70,229,0.3), transparent)",
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Image Animation */}
            <motion.img
              src={profileImage}
              alt="Divya Gupta"
              className="w-[420px] md:w-[480px] lg:w-[520px] select-none drop-shadow-2xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Text Content on Right */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-5 mt-10 md:mt-0 md:pl-10"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 12 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
              Hey, I’m Divya Gupta 👋
            </h2>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a passionate{" "}
              <span className="font-semibold text-indigo-500">
                Web Developer
              </span>{" "}
              and{" "}
              <span className="font-semibold text-purple-500">
                Blockchain Enthusiast
              </span>{" "}
              crafting digital experiences that blend{" "}
              <span className="text-pink-500 font-semibold">creativity</span>{" "}
              and{" "}
              <span className="text-blue-500 font-semibold">technology</span>.
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in building robust applications using the{" "}
              <span className="font-semibold text-green-500">MERN Stack</span>{" "}
              and exploring cutting-edge{" "}
              <span className="font-semibold text-yellow-500">
                Web3 innovations
              </span>
              . Every project I work on reflects my passion for{" "}
              <span className="text-pink-500 font-semibold">
                problem-solving
              </span>{" "}
              and delivering{" "}
              <span className="text-indigo-500 font-semibold">
                user-centered design
              </span>
              .
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              From hackathons to team collaborations, I believe in{" "}
              <span className="font-semibold text-purple-500">
                learning by building
              </span>{" "}
              and turning bold ideas into{" "}
              <span className="text-green-500 font-semibold">
                impactful solutions
              </span>{" "}
              that inspire.
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey is about continuous growth — fueled by curiosity,
              dedication, and a drive to innovate. I aim to create not just
              code, but experiences that matter.
            </p>

            <motion.div
              className="mt-6 flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
              >
                View My Work 🚀
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                Let’s Connect 💬
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* My Journey */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-2 text-indigo-600 dark:text-indigo-400">
            My Evolution Path 🚀
          </h3>
          <p className="text-center mb-12 text-lg text-gray-600 dark:text-gray-300">
            From beginnings to breakthroughs — a journey of transformation 🌱
          </p>

          <div className="relative flex flex-col items-center">
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-2 rounded-full bg-indigo-500"
              style={{
                height: "100%",
                boxShadow: "0 0 10px rgba(99,102,241,0.6)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2 }}
            />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`mb-12 flex flex-col md:flex-row w-full md:w-1/2 ${
                  index % 2 === 0
                    ? "md:self-start md:pr-12"
                    : "md:self-end md:pl-12"
                } relative`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800 hover:bg-indigo-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.3, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>

                <motion.div
                  className={`${item.gradient} rounded-2xl shadow-lg p-6 mt-12 md:mt-0 border`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-bold text-indigo-600 uppercase tracking-wider">
                    {item.year}
                  </h4>
                  <h5 className="text-2xl font-semibold mt-2 text-black">
                    {item.title}
                  </h5>
                  <p className="mt-2">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beyond the Code with smooth animations */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-2 text-indigo-600 dark:text-indigo-400">
            Beyond the Code 🌟
          </h3>
          <p className="text-center mb-12 text-lg text-gray-600 dark:text-gray-300">
            More than just code — it’s creativity, connection, and continuous
            growth💡
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {beyondCode.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-2xl cursor-pointer border dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.1,
                }}
              >
                <motion.div
                  className="text-3xl mb-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {item.emoji}
                </motion.div>
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

