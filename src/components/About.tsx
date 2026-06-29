export default function About() {
  const skills = [
    "Java", "Python", "TypeScript", "AWS", "Terraform", "Docker", "Kubernetes",
    "LangChain", "Groq", "FAISS", "RAG", "n8n", "Streamlit", "PostgreSQL", "Redis"
  ];

  return (
    <section id="about" className="py-24 bg-navy relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Bio */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="text-electricBlue">/</span> About Me
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Backend and cloud engineer with 4+ years of production experience — 
                now deep in the AI/LLM space. Built the Hey Mercedes ChatGPT voice 
                integration shipped to <span className="text-white font-medium">3M+ vehicles</span>.
              </p>
              <p>
                Led Kubernetes → Lambda migrations cutting infra costs <span className="text-electricBlue font-medium">60-70%</span>. 
                Now building AI agents, LLM pipelines, and automated systems that push the boundaries 
                of what&apos;s possible.
              </p>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-2 rounded-full border border-electricBlue/30 bg-electricBlue/5 text-electricBlue font-medium hover:bg-electricBlue hover:text-navy hover:shadow-[0_0_20px_rgba(99,179,237,0.6)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
