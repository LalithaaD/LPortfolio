import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "resume", "contact"];
      const scrollPosition = window.scrollY + 200;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Check if we're at the bottom of the page
      const isAtBottom = window.scrollY + windowHeight >= documentHeight - 100;

      let activeSection = "home";

      // If at bottom, highlight the last section (contact)
      if (isAtBottom) {
        activeSection = "contact";
      } else {
        // Otherwise, find the section closest to the scroll position
        let closestDistance = Infinity;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const distance = Math.abs(offsetTop - scrollPosition);

            if (distance < closestDistance) {
              closestDistance = distance;
              activeSection = section;
            }
          }
        }
      }

      setActiveSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Right Side */}
      <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-mono transition-colors duration-300 ${
                isActive ? "text-accent font-semibold" : "text-muted-foreground hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 right-4 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </Button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/60"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-mono transition-colors ${
                    isActive 
                      ? "text-accent font-semibold" 
                      : "text-muted-foreground hover:text-accent"
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
