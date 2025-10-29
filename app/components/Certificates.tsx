import { Award, ExternalLink, Calendar } from "lucide-react";
import { certificatesData } from "../data/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-neutral-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-3">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Professional certifications and achievements that demonstrate my
            commitment to continuous learning and expertise in various
            technologies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="flex flex-wrap gap-6 justify-center">
          {certificatesData.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 basis-full md:basis-[48%] lg:basis-[31%]"
            >
              <div className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:shadow-lg hover:shadow-white/5 transition-all duration-300 transform hover:-translate-y-1 p-6 h-full">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-3">
                  <Award className="w-8 h-8 text-gray-200" />
                  <span className="text-xs border border-gray-700 text-gray-400 rounded px-2 py-0.5">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-white mb-1">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm font-semibold text-gray-300 mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 border border-gray-700 text-gray-200 rounded-full hover:bg-white hover:text-black transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Section */}
                <div className="pt-2 mt-auto">
                  <div className="flex items-center gap-1 mb-3 text-gray-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>ID: {cert.credentialId}</span>
                  </div>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1 text-sm border border-gray-700 text-gray-300 rounded-md py-2 hover:bg-white hover:text-black transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Always learning and staying up-to-date with the latest technologies
            and best practices.
          </p>
          <button className="px-6 py-2 border border-gray-700 text-gray-200 rounded-md hover:bg-white hover:text-black transition-colors">
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  );
}
