const scrollToSection = (
  sectionId,
  setActiveSection,
  setMobileMenuOpen = null
) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    });

    if (setActiveSection) {
      setActiveSection(sectionId);
    }

    if (setMobileMenuOpen !== null) {
      setMobileMenuOpen(false);
    }
  }
};

export default scrollToSection;
