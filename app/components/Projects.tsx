import Image from "next/image";
import { projectsData } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            A selection of projects that reflect my experience in full stack
            development and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
            key={index}
            className="flex flex-col bg-neutral-800 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5"
            >          
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 border border-gray-700 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 text-sm font-medium px-4 py-2 rounded-md transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 text-sm font-medium px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-700 text-gray-200 px-6 py-3 rounded-md text-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
