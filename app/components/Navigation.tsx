"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧭 Track which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,  // Lowered from 0.3 to 0.1 for better detection on tall sections
        rootMargin: "-150px 0px -250px 0px",  // Adjusted for more generous margins (was "-100px 0px -200px 0px")
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[rgba(10,10,10,0.7)] backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="px-7 sm:px-9 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div
            className="relative h-12 w-28 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/white-logo.png"
              alt="Ricardo Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 150px"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleMenuItemClick(item.href)}
                  className={`relative text-gray-100 transition-all duration-300 text-[0.65rem] sm:text-[0.80rem] font-medium px-3 py-1 rounded-md
                    ${
                      isActive
                        ? "text-[#2596be]"
                        : "hover:text-[#2596be] hover:bg-white/10"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 mx-auto w-2/3 h-[2px] bg-[#2596be] rounded-full transition-all duration-300"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 p-2 rounded-md hover:bg-white/10 transition"
              aria-label="menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-100 hover:text-[#2596be] transition"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleMenuItemClick(item.href)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition ${
                  activeSection === item.href
                    ? "text-[#2596be] bg-white/10"
                    : "hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
