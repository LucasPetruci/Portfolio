import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import "../styles/components/maincontent.sass";
import EducationContainer from "./EducationContainer";
import ExperienceContainer from "./ExperienceContainer";
import CompaniesContainer from "./CompaniesContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <section id="Sobre Mim">
        <AboutContainer />
      </section>

      <section id="Experiencia Profissional">
        <ExperienceContainer />
      </section>

      <section id="Empresas">
        <CompaniesContainer /> 
      </section>

      <section id="Formação Acadêmica">
        <EducationContainer />
      </section>

      <section id="Projetos">
        <ProjectsContainer />
      </section>

      <section id="Tecnologias">
        <TechnologiesContainer />
      </section>
    </main>
  );
};

export default MainContent;
