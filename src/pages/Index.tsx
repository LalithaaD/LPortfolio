import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-x-hidden">
      
      {/* Animated graph background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,hsl(var(--grid-line))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-line))_1px,transparent_1px)] bg-[length:4rem_4rem] opacity-20 animate-slide"></div>

      {/* Tailwind animation keyframes */}
      <style>{`
        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: 4rem 4rem; }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="font-mono text-sm">
            Made with 💖 by Lalitha M. Divakaruni
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
