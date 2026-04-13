import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      
      {/* Animated graph background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,hsl(var(--grid-line))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-line))_1px,transparent_1px)] bg-[length:4rem_4rem] opacity-20 animate-slide"></div>

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans text-xs sm:text-sm text-muted-foreground">
            Made with 💖 by Lalitha M. Divakaruni
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
