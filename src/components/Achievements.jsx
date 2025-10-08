import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Target } from "lucide-react";

const achievements = [
  {
    title: "BLOCKATHON 2024 Winner",
    organization: "Systango",
    year: "2024",
    description:
      "🏆 Outshined 50+ teams in blockchain project development with innovation and teamwork.",
    icon: Trophy,
  },
  {
    title: "Vice-President",
    organization: "Blockchain Technology Club",
    year: "2024",
    description:
      "🎓 Leading initiatives and organizing 5+ events to promote blockchain awareness.",
    icon: Award,
  },
  {
    title: "DCC Hackathon 2024",
    organization: "AITR",
    year: "2024",
    description:
      "🏆 Achieved Top 3 Finalist position with a cutting-edge project.",
    icon: Star,
  },
  {
    title: "DBMS Certification",
    organization: "NPTEL",
    year: "2024",
    description:
      "📜 Gained in-depth knowledge of DBMS concepts, enhancing database skills.",
    icon: Target,
  },
  {
    title: "Blockchain Basics Certification",
    organization: "Alertcode",
    year: "2024",
    description:
      "🎓 Completed comprehensive blockchain fundamentals course to strengthen expertise.",
    icon: Award,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-32 px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 
                 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-7 
                         text-indigo-600 dark:text-indigo-400"
          >
            Achievements & Certifications
          </h2>

          <p className="text-center text-xl font-semibold mb-12">
            <span className="text-indigo-500">✨</span>{" "}
            <span
              className="bg-clip-text text-transparent 
                             bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 
                             dark:from-indigo-400 dark:via-pink-400 dark:to-purple-400"
            >
              Recognition and milestones that define my growth and passion for
              innovation
            </span>
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex"
            >
              <div
                className="relative flex flex-col justify-between p-6 rounded-xl shadow-lg w-full
             bg-gradient-to-br from-white to-indigo-50/20
             dark:from-gray-800 dark:via-gray-900 dark:to-gray-950
             border border-transparent group hover:border-indigo-400
             hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]
             transition-all duration-300 ease-in-out overflow-hidden"
              >
                {/* Glowing Overlay */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20
                  opacity-0 group-hover:opacity-100 animate-pulse blur-lg pointer-events-none"
                ></div>

                {/* Card Content */}
                <div className="relative flex items-start gap-4 z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0
                 bg-gradient-to-br from-indigo-500 to-indigo-700 
                 dark:from-indigo-600 dark:to-cyan-500
                 group-hover:scale-110 transform transition-transform duration-300 
                 shadow-md shadow-indigo-200 dark:shadow-cyan-800/40"
                  >
                    <achievement.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-extrabold text-black dark:text-white">
                        {achievement.title}
                      </h3>
                      <span
                        className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 
                         bg-indigo-50 dark:bg-indigo-800 px-3 py-1 rounded-full"
                      >
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-indigo-600 font-semibold dark:text-indigo-400 mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      {achievement.description}
                    </p>
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
