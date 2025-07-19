import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";
import { MdLocationOn, MdOutlineSchool } from "react-icons/md";
import profileImage from "../assets/profile.jpg"; // replace with your image

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-400 shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hi, I’m Divya Gupta 👋</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I’m a passionate <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Web Developer</span> and <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Blockchain Enthusiast</span> currently pursuing B.Tech in Information Technology. My journey in tech is fueled by curiosity and a strong desire to craft clean, scalable, and user-focused web applications.
              I specialize in the MERN stack and enjoy turning ideas into real-world solutions — combining logic with creativity to build seamless user experiences and dynamic backend systems. Alongside web development, I’m also exploring the world of Blockchain to broaden my horizons and stay ahead in the evolving tech landscape.
              Every project is a new opportunity to learn, grow, and make meaningful impact, and I’m always excited to collaborate on challenges that inspire innovation.
            </p>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 border-l-4 border-indigo-500 pl-3">Education</h3>
          <div className="relative border-l-2 border-indigo-400 pl-6 space-y-8">
            <div className="relative">
              <FaUniversity className="absolute -left-6 top-1 text-indigo-500 text-xl" />
              <h4 className="text-lg font-bold">Acropolis Institute of Technology and Research, Indore (M.P.)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech in Information Technology</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">2022 – 2026</p>
            </div>
            <div className="relative">
              <MdOutlineSchool className="absolute -left-6 top-1 text-indigo-500 text-xl" />
              <h4 className="text-lg font-bold">12th - Wisdom Public School, Jabalpur (M.P.) </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed in 2022</p>
            </div>
            <div className="relative">
              <MdOutlineSchool className="absolute -left-6 top-1 text-indigo-500 text-xl" />
              <h4 className="text-lg font-bold">10th - St. Joseph's Convent Girls' Sr. Sec. School, Jabalpur (M.P.) </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed in 2020</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
