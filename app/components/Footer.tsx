"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-neutral-800 pt-12 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
          {/* Brand Section */}
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-semibold text-white">Portfolio</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Full Stack Developer passionate about creating clean, efficient, and user-focused digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 space-y-3">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-1">
              {[
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Experience" },
                { href: "#certificates", label: "Certificates" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="flex-1 space-y-3">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-2">
              <a
                href="https://github.com/RicardoJrHermogino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-white transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/workw8ricardojrhermogino/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ricardohermoginojr@gmail.com"
                className="p-2 text-gray-500 hover:text-white transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              ricardohermoginojr@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-sm text-gray-500">
            © {currentYear} Portfolio. All rights reserved.
          </p>

          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span>Made with</span>
            <Heart size={14} className="text-gray-400" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
