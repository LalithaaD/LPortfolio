import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Credly tile will use a simple text fallback; could be replaced with an SVG/logo image if preferred

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 text-left text-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's connect — I'd love to chat!
        </motion.p>

        <p className="text-sm text-muted-foreground mb-8">lalithamadhuri3@gmail.com</p>

        <motion.div
          className="flex items-center justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:lalithamadhuri3@gmail.com"
            aria-label="Email"
            className="w-14 h-14 flex items-center justify-center tile text-gray-200 border border-transparent tile--interactive transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/LalithaaD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-14 h-14 flex items-center justify-center tile text-gray-200 border border-transparent tile--interactive transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/lalithamadhurid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-14 h-14 flex items-center justify-center tile text-gray-200 border border-transparent tile--interactive transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="https://www.credly.com/users/lalitha-madhuri/badges#credly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Credly"
            className="w-14 h-14 flex items-center justify-center tile text-gray-200 border border-transparent tile--interactive transition-colors"
          >
            <img src={`${import.meta.env.BASE_URL}credly_logo.png`} alt="Credly" className="w-8 h-8 object-contain" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
