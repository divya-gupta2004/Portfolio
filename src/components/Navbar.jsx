import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Achievements", href: "achievements" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const offsetTop = sec.offsetTop - 100;
        const offsetBottom = offsetTop + sec.offsetHeight;
        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Divya Gupta
        </h1>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.href}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className={`cursor-pointer text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-all ${
                active === link.href
                  ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500 pb-1"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.href}
              smooth={true}
              duration={500}
              onClick={() => setNavOpen(false)}
              className={`block py-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-all ${
                active === link.href
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

