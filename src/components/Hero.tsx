"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "@/components/ContactModal";

import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full bg-navy overflow-hidden flex flex-col justify-center pt-24 pb-12">
      
      {/* Subtle Background Elements for depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electricBlue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-electricBlue/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Grid: Amidat-style split */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Large Portrait Image Card */}
        <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">
          
          {/* Offset Wireframe Decoration (behind the image) */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-white/10 rounded-[24px] pointer-events-none hidden md:block" />
          <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 border border-electricBlue/20 rounded-tl-[24px] rounded-br-[24px] pointer-events-none hidden md:block" />

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 bg-navy/60 backdrop-blur-[20px] group transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(99,179,237,0.2)] hover:border-electricBlue/30 cursor-crosshair"
          >
            {/* The Image */}
            <Image 
              src="/headshot.jpg" 
              alt="Haneesh Nellore"
              width={460}
              height={575}
              priority
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Bottom Gradient Overlay with "HN." */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B1120] to-transparent flex flex-col justify-end p-8 text-center pb-8">
              <h3 className="text-white font-bold tracking-widest text-4xl opacity-90 transition-transform duration-500 group-hover:-translate-y-2">
                HN<span className="text-electricBlue">.</span>
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Minimalist Text (Floating Coder Vibe) */}
        <div className="flex flex-col items-start text-left max-w-xl group">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="transition-transform duration-700 group-hover:translate-x-2"
          >

            {/* Heading: Minimalist, Sans-serif, Bullets, One Line */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-2 tracking-wider whitespace-nowrap">
              SHIP <span className="text-electricBlue px-1">&bull;</span> LEARN <span className="text-electricBlue px-1">&bull;</span> REPEAT
            </h1>

            {/* Subheading: 0 -> 1 Minimalist Caption */}
            <h2 className="text-xl md:text-[24px] font-mono font-medium text-electricBlue tracking-[0.3em] mb-8 opacity-80">
              0 &rarr; 1
            </h2>

            {/* Body Paragraph: Concise and clean */}
            <p className="text-[16px] md:text-[18px] text-slate-300 leading-[1.8] max-w-[450px]">
              I build the infrastructure no one sees — but everything depends on it. 
              As an AI-native engineer, I ship products from 0&rarr;1 in hours, 
              iterate on feedback, and scale what works.
            </p>

            {/* Talk to Me CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-10 bg-[#1A2235]/70 backdrop-blur-xl border border-white/20 text-white font-medium uppercase tracking-widest text-[15px] py-[14px] px-[40px] rounded-full hover:bg-white/10 hover:border-electricBlue/50 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(99,179,237,0.2)] transition-all duration-300"
            >
              Talk to Me
            </button>

          </motion.div>
        </div>

      </div>

      {/* Render the Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
}
