import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";
import "../styles/components/projectsContainer.sass";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erro ao carregar projetos:", error));
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default ProjectsContainer;
