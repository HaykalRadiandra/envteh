import { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load sections below the fold for better performance
const Problem = lazy(() => import("./components/Problem"));
const Solution = lazy(() => import("./components/Solution"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Process = lazy(() => import("./components/Process"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Hero isDarkMode={isDarkMode} />

        {/* Suspense wrapper for lazy-loaded components */}
        <Suspense
          fallback={
            <div className="h-40 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <Problem isDarkMode={isDarkMode} />
          <Solution isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Services isDarkMode={isDarkMode} />
          <Portfolio isDarkMode={isDarkMode} />
          <Process isDarkMode={isDarkMode} />
          <FAQ isDarkMode={isDarkMode} />
          <CTA isDarkMode={isDarkMode} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer isDarkMode={isDarkMode} />
      </Suspense>
    </div>
  );
}

export default App;
