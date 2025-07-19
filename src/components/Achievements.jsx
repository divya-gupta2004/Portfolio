import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievements = [
  "🏆 Winner of BLOCKATHON 2024 (AITR) — outshining 50+ teams in blockchain project development",
  "🎓 Vice-President of Blockchain Technology Club (2024), leading initiatives and organizing 5+ events",
  "🏆 Participated in DCC Hackathon 2024 (AITR) — Top 3 Finalist",
  "📜 NPTEL Certified in Database Management Systems (2024)",
  "🎓 Blockchain Basics Certification (2024)",
];

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-indigo-600 dark:text-indigo-400 mb-12">
          Achievements & Certifications
        </h2>
        <ul className="space-y-6">
          {achievements.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
              <p className="text-base leading-snug text-gray-700 dark:text-gray-300">
                {item}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Achievements;