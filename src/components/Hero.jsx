import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import profileHero from "../assets/profile-hero.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Divya Gupta</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          <TypeAnimation
            sequence={[
              "MERN Developer", 2000,
              "Web Enthusiast", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-indigo-500 dark:text-indigo-300"
          />
        </h2>

        <p className="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8">
          I build modern full-stack web applications using the MERN stack, with passion for UI, backend logic, and seamless user experiences.
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/divya-gupta2004"
            title="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-indigo-600 transition transform hover:scale-110 hover:drop-shadow-lg duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/divya-gupta-888361289"
            title="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-indigo-600 transition transform hover:scale-110 hover:drop-shadow-lg duration-300"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:divyagupta20042004@gmail.com" 
            title="Email Me"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl hover:text-indigo-600 transition transform hover:scale-110 hover:drop-shadow-lg duration-300"
          >
            <FaEnvelope  />
          </a>

        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="contact"
            smooth
            duration={500}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-all cursor-pointer shadow-lg"
          >
            Contact Me
          </Link>
          <a
            href="/Divya_Gupta_Resume.pdf"
            download
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-2 rounded-full transition-all shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

