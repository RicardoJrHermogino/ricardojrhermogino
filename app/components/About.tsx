"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal/ScrollReveal";
import TiltedCard from "./ui/TiltedCard/TiltedCard";
import LogoLoop from "./ui/LogoLoop/LogoLoop";
import { skills, expertise } from "../data/skills";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiReact,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiCapacitor,
  SiMui,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiCanva,
  SiVercel,
  SiHostinger,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

export function About() {
  const MotionDiv = motion.div;

  const techLogos = [
    { node: <SiHtml5 />, title: "HTML" },
    { node: <SiCss3 />, title: "CSS" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiPhp />, title: "PHP" },
    { node: <SiLaravel />, title: "Laravel" },
    { node: <SiReact />, title: "React" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiCapacitor />, title: "CapacitorJS" },
    { node: <SiMui />, title: "Material UI" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <SiGit />, title: "Git" },
    { node: <FaCode />, title: "REST APIs" },
    { node: <SiFigma />, title: "Figma" },
    { node: <SiCanva />, title: "Canva" },
    { node: <SiVercel />, title: "Vercel" },
    { node: <SiHostinger />, title: "Hostinger" },
  ];

  return (
    <section id="about" className="py-20 bg-[#121212] text-white">
      {/* Reduced horizontal padding */}
      <div className="max-w-7xl mx-auto px-3 md:px-6">

        {/* --- Centered About Me Title --- */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
            About Me
          </h2>
        </div>

        {/* --- Content (Text Left, Image Right) --- */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 flex items-center justify-center text-center px-4">
            <div className="flex flex-col items-center">

              {/* 👇 Your name here */}
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Ricardo Jr. E. Hermogino
              </h3>

              <div className="mt-2 max-w-md text-gray-300 leading-relaxed">
              Full-stack developer with a degree in Information Technology who enjoys solving real-world problems through code. 
              I value teamwork, clean design, and efficiency. Eager to learn, grow, and improve how I build things.
              </div>
            </div>
          </div>

          {/* Right Section - Tilted Card */}
          <TiltedCard
            imageSrc="me.png"
            altText="About Me Picture"
            useResponsiveSize={true}
            scaleOnHover={1.05}
            rotateAmplitude={8}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          />
        </div>

        {/* --- Expertise Section --- */}
        <div className="max-w-7xl mx-auto mt-16 px-3 md:px-6">
          <h3 className="text-xl md:text-2xl font-light mb-6">My Expertise</h3>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              {expertise.map((item, index) => (
                <MotionDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-[#1e1e1e] border border-[#333] rounded-xl h-40 flex flex-col items-center justify-center p-4 hover:-translate-y-1 hover:shadow-lg hover:border-primary transition-all duration-300"
                >
                  <div className="mb-2 text-3xl text-white">
                    <item.icon strokeWidth={1.5} className="text-white" />
                  </div>
                  <h4 className="text-white font-medium text-base mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm text-center">{item.description}</p>
                </MotionDiv>
              ))}
            </div>

            {/* Right: Skills and What I Bring */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 flex flex-col justify-center"
            >
              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-xl md:text-2xl font-light mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#2a2a2a] text-white text-xs md:text-sm px-3 py-1 rounded-md hover:bg-[#333] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* What I Bring */}
              <div>
                <h4 className="text-xl md:text-2xl font-light mb-3">What I Bring</h4>
                <ul className="list-none space-y-2 text-gray-400 text-sm">
                  {[
                    "Aspiring full-stack developer with a degree in Information Technology",
                    "Experience with agile methodologies and team collaboration",
                    "Passion for clean code, testing, and continuous learning",
                    "Quick learner with a flexible, proactive work ethic and passion for continuous growth",
                  ].map((text, i) => (
                    <li key={i}>• {text}</li>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* --- Logo Loop --- */}
        <div className="mt-16 mb-6">
          <LogoLoop
            logos={techLogos.map((logo) => ({
              ...logo,
              node: <div className="text-white">{logo.node}</div>,
            }))}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#121212"
          />
        </div>
      </div>
    </section>
  );
}
