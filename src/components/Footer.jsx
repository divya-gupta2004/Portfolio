import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm relative z-10">
      <p>&copy; {new Date().getFullYear()} Divya Gupta | All rights reserved.</p>

      <div className="flex justify-center gap-6 mt-3 text-indigo-400">
        <a
          href="https://github.com/divya-gupta2004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300 hover:scale-110"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/divya-gupta-888361289"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300 hover:scale-110"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:divyagupta20042004@gmail.com"
          className="hover:text-white transition duration-300 hover:scale-110"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
