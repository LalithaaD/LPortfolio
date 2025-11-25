import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AWS Anomaly Dashboard",
    description:
      "Built a full-stack anomaly detection system with real-time cost monitoring and alerting, improving query performance by 20% and enabling reliable CI/CD deployments.",
    tags: ["AWS", "React", "FastAPI", "PostgreSQL", "CI/CD"],
    url: "https://github.com/LalithaaD/AWSAnamolyDashboard",
  },
  {
    title: "Legal AI Case Dashboard",
    description:
      "Developed an AI-driven legal case parsing dashboard, reducing manual review time by 50% and improving data accuracy with automated validation.",
    tags: ["AI/ML", "NLP", "React", "Node.js", "MongoDB"],
    url: "https://github.com/LalithaaD/LegalAICaseDashboard",
  },
  {
    title: "Task Management Platform",
    description:
      "Delivered a real-time, role-based access platform, improving API response times by 30% and stabilizing releases through unit and integration tests.",
    tags: ["React", "Express.js", "WebSockets", "PostgreSQL", "Jest"],
    url: "https://github.com/LalithaaD/TaskManagementFrontend",
  },
  {
    title: "Workflow Automation Toolkit",
    description:
      "Automated recurring tasks to reduce manual work by 60%, integrating event-based functions with logging, monitoring, and error handling.",
    tags: ["Node.js", "AWS Lambda", "Python", "CloudWatch"],
    url: "https://github.com/LalithaaD/WorkflowAutomation",
  },
  {
    title: "CropCrew",
    description:
      "Mobile-first farm operations platform with GPS tracking and real-time task management, improving field coordination and productivity.",
    tags: ["React Native", "Firebase", "GPS API", "Real-time DB"],
    url: "https://github.com/LalithaaD/CropCrew",
  },
  {
    title: "ML-Powered Search Engine",
    description:
      "Built ML-powered search engine, increasing result relevance by 30% over standard keyword search using transformers and embeddings.",
    tags: ["Python", "Machine Learning", "NLP", "Transformers", "Flask"],
    url: "https://github.com/LalithaaD/Search-Engine-Using-Machine-Learning-Techniques",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left text-accent">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                onClick={() => setSelected(selected === index ? null : index)}
                className={`p-6 card-glow group tile tile--interactive border border-transparent ${selected === index ? 'tile--selected' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-accent">
                    {project.title}
                  </h3>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} repository`}>
                      <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    </a>
                  ) : (
                    <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>

                <p className="text-white mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-accent mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Resume
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Want to dive deeper into my journey? Check out my full resume!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild variant="outline">
              <a href="/LalithaM.Divakaruni_Resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
