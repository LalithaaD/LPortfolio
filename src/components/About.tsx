import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Accessible UI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'FastAPI', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'],
  },
  {
    title: 'Cloud and DevOps',
    skills: ['AWS Lambda', 'S3', 'Docker', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    title: 'Machine Learning & AI',
    skills: ['NLP', 'Supervised Learning', 'Unsupervised Learning', 'LLM Fundamentals'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Postman', 'VS Code', 'Jira', 'Agile/Scrum', 'Google Cloud Platform', 'Microsoft Suite'],
  },
  {
    title: 'Practices',
    skills: ['API Security', 'Real Time Data Handling', 'Test Automation'],
  },
];

export default function AboutAndSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div>
      {/* About Section */}
      <section id="about" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-5xl font-bold text-accent text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.h2>

          {[
            "I'm Lalitha, a developer and designer. I build practical, scalable applications and turn rough ideas into reliable products. I care about clear design, solid engineering, and solutions that help people.",
            "I've shipped projects across cloud infrastructure, AI/ML pipelines, mobile platforms, and REST APIs, picking up new stacks fast and going deep where it matters. I'm currently building at Vosyn and actively looking for full-time roles where I can own meaningful work",
            "If you're building something ambitious, let's talk",

          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-base sm:text-lg md:text-lg text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}

          <div className="pt-6 space-y-3 text-foreground/70">
                {[
              { label: 'Email', value: 'lalithamadhuri3@gmail.com', href: 'mailto:lalithamadhuri3@gmail.com' },
              { label: 'GitHub', value: 'Lalitha M. D', href: 'https://github.com/LalithaaD' },
              { label: 'LinkedIn', value: 'Lalitha M. D', href: 'https://www.linkedin.com/in/lalithamadhurid' },
              { label: 'Location', value: 'Toronto, ON · Open to Relocation and remote opportunities across Canada.', href: null },
            ].map((item, i) => (
              <motion.p
                key={i}
                className="text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
              >
                <span className="font-semibold text-foreground">{item.label}:</span>{' '}
                  <a
                    href={item.href}
                    target={item.label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                  >
                  {item.value}
                </a>
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-5xl font-bold text-accent mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
              >
                <div className={`h-full p-6 rounded-2xl tile tile--interactive border ${selectedCategory === category.title ? 'tile--selected' : 'border-transparent'}`}>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs sm:text-sm rounded-lg tile text-muted-foreground border border-accent/20 transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
