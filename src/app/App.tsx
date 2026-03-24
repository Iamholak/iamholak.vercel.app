import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { CustomCursor } from "./components/CustomCursor";
import { CommandPalette } from "./components/CommandPalette";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      document.body.style.cursor = "none";
      const style = document.createElement("style");
      style.textContent = "a, button, input, textarea { cursor: none !important; }";
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <CommandPalette />
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navigation />
        <Hero introReady={!isLoading} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
