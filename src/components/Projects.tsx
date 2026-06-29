import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "VitalAI",
    description: "AI health analysis agent. Processes medical context and provides insights using RAG.",
    tags: ["LangChain", "Groq", "FAISS", "Streamlit"],
    liveUrl: "https://vitalai-haneesh.streamlit.app/",
    githubUrl: "https://github.com/Haneesh-Nellore/VitalAI",
  },
  {
    title: "Job Automation Pipeline",
    description: "Automated job application system scaling from 8 to 40+ applications per day.",
    tags: ["Claude AI", "n8n", "Apify"],
    liveUrl: null,
    githubUrl: "https://github.com/Haneesh-Nellore/job-automation-pipeline",
  },
  {
    title: "AWS Serverless Patterns",
    description: "Production-ready cloud architecture patterns with robust Infrastructure as Code.",
    tags: ["Lambda", "Terraform", "SQS", "RDS Proxy"],
    liveUrl: null,
    githubUrl: "https://github.com/Haneesh-Nellore/aws-serverless-patterns",
  },
  {
    title: "OpTrends AI",
    description: "Data intelligence and NLP application built during Microsoft Externship.",
    tags: ["Power BI", "HuggingFace NLP", "Python"],
    liveUrl: null,
    githubUrl: "https://github.com/Haneesh-Nellore/optrends-ai",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 bg-navy relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-electricBlue">/</span> Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:bg-white/10 transition-all duration-300 hover:border-electricBlue/50 hover:shadow-[0_0_30px_-5px_rgba(99,179,237,0.3)]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-electricBlue transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-electricBlue/10 text-electricBlue border border-electricBlue/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
