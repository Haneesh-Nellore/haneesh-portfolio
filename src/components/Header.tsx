"use client";

import { motion } from "framer-motion";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Me", href: "#about", active: false },
    { name: "Work", href: "#work", active: false },
    { name: "Socials", href: "#contact", active: false },
  ];

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-8 left-1/2 z-50"
    >
      <nav className="flex items-center bg-[#1A2235]/70 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              link.active 
                ? "bg-white/10 text-white shadow-sm" 
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
