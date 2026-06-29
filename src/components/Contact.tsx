import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy relative z-20 border-t border-white/5 flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Let&apos;s Build Something <span className="text-electricBlue">Great</span>.
      </h2>

      <p className="text-xl text-slate-300 mb-12 max-w-2xl font-light">
        Open to <span className="text-white font-medium">Senior Backend, Cloud/Platform & AI/LLM Engineering</span> roles.
      </p>

      <div className="flex items-center gap-8 mb-16">
        <a
          href="https://github.com/Haneesh-Nellore"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-electricBlue hover:border-electricBlue/50 hover:bg-electricBlue/10 hover:shadow-[0_0_20px_rgba(99,179,237,0.3)] transition-all duration-300"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/haneesh-nellore05/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-electricBlue hover:border-electricBlue/50 hover:bg-electricBlue/10 hover:shadow-[0_0_20px_rgba(99,179,237,0.3)] transition-all duration-300"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:nellorehaneesh123@gmail.com"
          className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-electricBlue hover:border-electricBlue/50 hover:bg-electricBlue/10 hover:shadow-[0_0_20px_rgba(99,179,237,0.3)] transition-all duration-300"
        >
          <Mail size={28} />
        </a>
      </div>

      <div className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Haneesh Nellore. Designed for high performance.
      </div>
    </section>
  );
}
