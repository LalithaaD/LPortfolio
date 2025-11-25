import { Mail, Github, Linkedin } from "lucide-react";

// Credly tile will use a simple text fallback; could be replaced with an SVG/logo image if preferred

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left text-accent">Contact</h2>

        <p className="text-lg text-muted-foreground mb-6 max-w-2xl">Let's connect — I'd love to chat!</p>

        <div className="flex items-center justify-start gap-4">
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
            <img src="/credly_logo.png" alt="Credly" className="w-8 h-8 object-contain" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
