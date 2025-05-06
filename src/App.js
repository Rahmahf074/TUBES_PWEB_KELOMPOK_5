import React, { useState, useEffect, useRef } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Menu from "./components/sections/Menu";
import Gallery from "./components/sections/Gallery";
import Testimonial from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import menuItems from "./data/menuItems";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    menu: useRef(null),
    gallery: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const scrollPosition = window.scrollY + 200;

      for (const section in sectionRefs) {
        const ref = sectionRefs[section].current;
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />
      <main>
        <div ref={sectionRefs.home}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        <div ref={sectionRefs.about}>
          <About scrollToSection={scrollToSection} />
        </div>
        <div ref={sectionRefs.menu}>
          <Menu menuItems={menuItems} />
        </div>
        <div ref={sectionRefs.gallery}>
          <Gallery scrollToSection={scrollToSection} />
        </div>
        <div ref={sectionRefs.testimonials}>
          <Testimonial scrollToSection={scrollToSection} />
        </div>
        <div ref={sectionRefs.contact}>
          <Contact scrollToSection={scrollToSection} />
        </div>
      </main>
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}

export default App;
