import {
 DiMysql,
 DiPython,

} from "react-icons/di";

import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiFirebase,
 
} from "react-icons/si";

import { FaGithub, FaDocker, FaGitAlt} from "react-icons/fa";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "flutter", name: "Flutter", icon: <SiFlutter /> },
  { id: "dart", name: "Dart", icon: <SiDart /> },
  {id: "kotlin", name: "Kotlin", icon: <SiKotlin/>},
  {id: "firebase", name: "Firebase", icon: <SiFirebase/>},
  {id: "mysql", name: "MySQL", icon: <DiMysql/>},
  {id: "python", name: "Python", icon: <DiPython/>},
  { id: "github", name: "GitHub", icon: <FaGithub /> },
  { id: "git", name: "Git", icon: <FaGitAlt /> },
  { id: "docker", name: "Docker", icon: <FaDocker /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
