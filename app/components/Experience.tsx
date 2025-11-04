import { useEffect, useState, useRef } from "react";
import { Building2, Calendar } from "lucide-react";
import { experienceData } from "../data/experience";

export function Experience() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showDot, setShowDot] = useState(false);
  const [lineLeft, setLineLeft] = useState<number | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
  
    const updateScroll = () => {
      const line = lineRef.current;
      if (!line) return;
  
      const rect = line.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;
  
      // Calculate scroll progress
      const totalHeight = rect.height;
      const scrolled = centerY - rect.top;
      const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      setScrollPercent(progress);
  
      // Get horizontal center of line (for responsiveness)
      const lineX = rect.left + rect.width / 2;
      setLineLeft(lineX);
  
      // ✅ Only show glowing dot when the line actually crosses the center
      const isCenterInsideLine = rect.top <= centerY && rect.bottom >= centerY;
      setShowDot(isCenterInsideLine);
  
      frameId = requestAnimationFrame(updateScroll);
    };
  
    frameId = requestAnimationFrame(updateScroll);
  
    return () => cancelAnimationFrame(frameId);
  }, []);
  

  return (
    <section
      className="relative py-24 bg-neutral-950 text-gray-100 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
            Work Experience
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            My professional journey as a full stack developer, highlighting key
            roles and achievements throughout my career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Base Line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-neutral-800 z-10"
          ></div>

          {/* Progress Line */}
          <div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[2px] bg-gray-200 z-20"
            style={{
              height: `${scrollPercent * 100}%`,
              transition: "none",
            }}
          ></div>

          {/* ✅ Glowing Dot (only when line is at center of screen) */}
          {showDot && lineLeft !== null && (
            <div
              className="fixed w-3 h-3 rounded-full bg-white z-30"
              style={{
                top: "50%",
                left: `${lineLeft}px`,
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 12px 4px rgba(255,255,255,0.4)",
                transition: "none",
              }}
            ></div>
          )}

          {/* Experience Cards */}
          <div className="flex flex-col gap-16">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Static Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 top-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-20"></div>

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-md hover:shadow-lg transition-all duration-300 p-6">
                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
                      <Building2 size={16} className="text-gray-200" />
                      <span>{exp.company}</span>
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Key Achievements:
                      </h4>
                      <ul className="list-none space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-400 text-sm">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 border border-gray-600 text-gray-200 rounded-full hover:bg-white hover:text-black transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
