"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Beams from "./ui/Beams/Beams";
import BlurText from "./ui/BlurText/BlurText";
import AnimatedContent from "./ui/AnimatedContent/AnimatedContent";

export function Hero() {
  const [isDark, setIsDark] = useState(true);

  // Detect dark mode (if you're using Next Theme or system preference)
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setIsDark(false);
    }
  }, []);

  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ${
        isDark
          ? "bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]"
          : "bg-[#f4f4f4]"
      }`}
    >
      {/* Beams Background */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor={isDark ? "#ffffff" : "#333333"}
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        {!isDark && (
          <div className="absolute inset-0 bg-[rgba(244,244,244,0.3)] z-10 pointer-events-none" />
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={true}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.3}
        >
          <div className="flex flex-col items-center justify-center space-y-10">
            {/* Headings */}
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-gray-400 font-bold tracking-wide opacity-80 text-[2.1rem] sm:text-[2.2rem] md:text-[2.3rem]">
                Hello, I&apos;m
              </h1>

              <BlurText
                text="Ricardo Jr. E. Hermogino"
                animateBy="letters"
                direction="top"
                delay={100}
                stepDuration={0.3}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
              />

              <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg md:text-xl font-normal">
                Welcome to my portfolio! Discover my projects and the ideas I bring to life
                through code and design.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={() => scrollTo("#projects")}
                className="bg-primary text-white font-medium px-6 py-3 rounded-md text-lg hover:bg-primary/80 transition w-[200px] sm:w-auto"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="border border-gray-500 text-gray-200 font-medium px-6 py-3 rounded-md text-lg hover:bg-white/10 transition w-[200px] sm:w-auto"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 justify-center">
              <a
                href="https://github.com/RicardoJrHermogino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition"
              >
                <Github size={36} />
              </a>
              <a
                href="https://www.linkedin.com/in/workw8ricardojrhermogino/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition"
              >
                <Linkedin size={36} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ricardohermoginojr@gmail.com"
                className="text-gray-300 hover:text-primary transition"
              >
                <Mail size={36} />
              </a>
            </div>
          </div>
        </AnimatedContent>
      </div>

      {/* Bouncing Arrow */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-gray-400"
        onClick={() => scrollTo("#about")}
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
