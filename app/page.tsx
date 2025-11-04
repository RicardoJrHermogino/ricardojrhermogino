  "use client";

  import { Navigation } from "./components/Navigation";
  import { Hero } from "./components/Hero";
  import { About } from "./components/About";
  import { Projects } from "./components/Projects";
  import { Experience } from "./components/Experience";
  import { Certificates } from "./components/Certificates";
  import { Contact } from "./components/Contact";
  import { Footer } from "./components/Footer";
  import { Chatbot } from "./components/Chatbot";

  export default function HomePage() {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="certificates">
            <Certificates />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
        <Chatbot />
      </div>
    );
  }
