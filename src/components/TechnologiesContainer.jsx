import {
 DiMysql,
 DiPython,

} from "react-icons/di";

import {
  SiPhp,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiAntdesign,
  SiAwslambda,
  SiLaravel,
  SiAmazonsqs,
  SiCakephp
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

import { FaGithub, FaDocker, FaGitAlt} from "react-icons/fa";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "antd", name: "Ant Design (AntD)", icon: <SiAntdesign /> },
  { id: "aws", name: "AWS", icon: <FaAws /> },
  { id: "aws_lambda", name: "AWS Lambda", icon: <SiAwslambda /> },
  { id: "aws_sqs", name: "AWS SQS", icon: <SiAmazonsqs /> },
  { id: "cakephp", name: "CakePHP", icon: <SiCakephp /> },
  { id: "css", name: "CSS", icon: <SiCss3 /> },
  { id: "docker", name: "Docker", icon: <FaDocker /> },
  { id: "git", name: "Git", icon: <FaGitAlt /> },
  { id: "github", name: "GitHub", icon: <FaGithub /> },
  { id: "html", name: "HTML", icon: <SiHtml5 /> },
  { id: "javascript", name: "JavaScript", icon: <SiJavascript /> },
  { id: "laravel", name: "Laravel", icon: <SiLaravel /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "node", name: "Node.js", icon: <SiNodedotjs /> },
  { id: "php", name: "PHP", icon: <SiPhp /> },
  { id: "python", name: "Python", icon: <DiPython /> },
  { id: "react", name: "React", icon: <SiReact /> },
  { id: "react_native", name: "React Native", icon: <SiReact /> },
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
