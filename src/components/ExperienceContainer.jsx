import React from "react";
import { MdWork } from "react-icons/md";
import "../styles/components/experienceContainer.sass";

const ExperienceContainer = () => {
  const experienceData = [
      {
        title: "Desenvolvedor Full Stack",
        company:
          "GCondo",
        date: "Maio/2025 - Atualmente",
        tasks: `Iniciei como estagiário curioso e, após dois meses, fui promovido a Desenvolvedor Júnior pelo desempenho e evolução técnica. Atuo na manutenção e evolução do sistema GCondo, com destaque para o desenvolvimento de um módulo de configuração que aumentou a autonomia dos usuários e reduziu em 30% os chamados ao suporte. Atualmente, estou trabalhando no desenvolvimento de uma nova API utilizando DDD para otimizar o tempo de desenvolvimento e a escalabilidade. Também atuo na criação de novas funcionalidades com React.js e manutenção do back-end em Node.js/Lambda e PHP Eloquent, sempre focando em entregas consistentes e de alta qualidade. Participo ativamente de code reviews e busco aplicar as melhores práticas de desenvolvimento em colaboração com profissionais experientes que aceleram meu crescimento.`,
      },
     {
      title: "Desenvolvedor Full Stack",
      company:
        "FsTech",
      date: "Junho/2024 - Maio/2025",
       tasks: `Atuei como Desenvolvedor Full Stack freelancer na FsTech, colaborando com diversos clientes e atuando como principal desenvolvedor da empresa em diferentes projetos. Ao longo dessa experiência, assumi responsabilidades técnicas de ponta a ponta, desde o levantamento de requisitos e contato direto com os clientes até o desenvolvimento, manutenção e evolução das soluções. Trabalhei com aplicações web e mobile utilizando PHP (CakePHP), Next.js e React Native, realizando integrações com APIs REST, serviços da AWS e sistemas de pagamento como o PagBank. Também desenvolvi soluções em Python, incluindo microsserviços, bots e automações, contribuindo para a otimização de processos e entrega contínua de valor, sempre com foco em qualidade, performance e escalabilidade`,
    },
    {
      title: "Polo de Inovação",
      company:
        "Polo de Inovação Campos dos Goytacazes (PICG) - SoftSeg e Embrapii",
      date: "2023 - 2024",
      tasks: `Atuei como bolsista no Polo de Inovação do Instituto Federal Fluminense, iniciando como apoio em atividades de desenvolvimento e, ao longo do período, me destacando até assumir responsabilidades em tempo integral em diferentes projetos. Trabalhei no desenvolvimento de interfaces responsivas em Flutter para Android e iOS, colaborando com equipes de design e desenvolvimento para alinhar requisitos e garantir consistência entre UX e implementação. Também atuei na implementação de testes unitários com Pytest e em projetos de análise de dados em Python, aplicando regressão linear para predição e geração de insights.`,
    },
  ];

  return (
    <section className="experience-container">
      <h2>Experiência Profissional</h2>
      {experienceData.map((experience, index) => (
        <div key={index} className="experience-item">
          <MdWork className="experience-icon" />
          <div className="info">
            <h3>{experience.title}</h3>
            <h4 className="company">{experience.company}</h4>
            <span>{experience.date}</span>
            <p className="tasks">
              {experience.tasks
                .trim() 
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </p>

          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceContainer;