import { useEffect, useState } from "react";
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/profile.png";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = [
      "Sobre Mim",
      "Experiencia Profissional",
      "Atuação Profissional",
      "Formação Acadêmica",
      "Projetos",
      "Tecnologias",
    ];
    let currentSection = "";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentSection = section;
      }
    });

    setActiveSection(currentSection);
  };

  const handleLinkClick = (event, section) => {
    event.preventDefault();
    const target = document.getElementById(section);

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas Petruci" />
      <p className="title subtitle">Desenvolvedor mobile</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="/LucasPetruciCurriculo.pdf"
        className="btn"
        download="LucasPetruciCurriculo.pdf"
      >
        Download currículo
      </a>

      <nav className="menu">
        <ul>
          {[
            "Sobre Mim",
            "Experiencia Profissional",
            "Atuação Profissional",
            "Formação Acadêmica",
            "Projetos",
            "Tecnologias",
          ].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
                onClick={(e) => handleLinkClick(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
