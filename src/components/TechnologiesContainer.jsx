import {
 DiMysql,
 DiPython,

} from "react-icons/di";

import {
  SiPhp,
  SiReact,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

import { FaGithub, FaDocker, FaGitAlt} from "react-icons/fa";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "aws", name: "AWS", icon: <FaAws /> },
  { id: "docker", name: "Docker", icon: <FaDocker /> },
  { id: "git", name: "Git", icon: <FaGitAlt /> },
  { id: "github", name: "GitHub", icon: <FaGithub /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "php", name: "PHP", icon: <SiPhp /> },
  { id: "python", name: "Python", icon: <DiPython /> },
  { id: "react", name: "React", icon: <SiReact /> },
  { id: "react_native", name: "React Native", icon: <SiReact /> },

    // 🔽 Tecnologias usadas no trabalho (ainda sem ícone/import)
  // { id: "node", name: "Node.js" },
  // { id: "javascript", name: "JavaScript" },
  // { id: "html", name: "HTML" },
  // { id: "css", name: "CSS" },
  // { id: "antd", name: "Ant Design (AntD)" },
  // { id: "cakephp", name: "CakePHP" },
  // { id: "eloquent", name: "Eloquent ORM" },
  // { id: "ci_cd", name: "CI/CD" },
  // { id: "aws_lambda", name: "AWS Lambda" },
  // { id: "expo", name: "Expo" },
  // { id: "pagbank", name: "Checkout (PagBank)" },
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
