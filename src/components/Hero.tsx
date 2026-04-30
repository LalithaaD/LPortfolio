import { useEffect, useState } from "react";

const titles = [
  "Full Stack Developer",
  "Software Developer",
  "UI Developer",
  "Frontend Engineer",
  "Backend Engineer",
];

const typeSpeed = 100;
const deleteSpeed = 55;
const pauseDuration = 1800;

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(
          () => setDisplayText(currentTitle.slice(0, displayText.length + 1)),
          typeSpeed
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => setDisplayText(currentTitle.slice(0, displayText.length - 1)),
          deleteSpeed
        );
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((current) => (current + 1) % titles.length);
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-x-hidden">
      <div className="z-10 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="name-gradient">Lalitha M. D</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/80 inline-flex items-center justify-center gap-2">
          {displayText}
          <span
            className={`inline-block h-[1.1em] w-[2px] bg-[hsl(323_92%_35%)] transition-opacity duration-150 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        </p>
      </div>
    </section>
  );
}
