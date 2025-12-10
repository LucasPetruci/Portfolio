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
       tasks: `Responsável pela manutenção e desenvolvimento de aplicações web utilizando Next.js e sistemas PHP. Desenvolvi microsserviços em Python com integração à OpenAI API para automação de fluxos. Implementei CI/CD com GitHub Actions para deploy automatizado em Amazon Lambda com Amazon SQS. Realizei integração completa de pagamento com PagBank, incluindo checkout, webhooks e testes em ambiente de homologação. Gerenciei ambientes de desenvolvimento com Dockerfile e Docker Compose, garantindo consistência entre ambientes de desenvolvimento e produção.`,
    },
    {
      title: "Desenvolvedor Mobile",
      company:
        "Polo de Inovação Campos dos Goytacazes (PICG) - SoftSeg e Embrapii",
      date: "Abril/2024 - Dezembro/2024",
      tasks: `Desenvolvi telas responsivas em Flutter para Android e iOS, transformando protótipos em interfaces funcionais com ótima experiência de usuário. Colaborei com equipes de design e desenvolvimento para alinhar requisitos e garantir consistência entre UX e implementação. Implementei funcionalidades de geolocalização integrando Google Maps e Geocoding. Desenvolvi módulos nativos em Kotlin para aprimorar suporte a GPS e funcionalidades específicas do Android. Realizei consumo de APIs RESTful, gerenciamento de estado com Provider e utilizei Firebase Crashlytics para monitoramento de erros. Implementei testes unitários com Pytest, garantindo qualidade e estabilidade do software.`,
    },
    {
      title: "Analista de Dados",
      company: "Polo de Inovação Campos dos Goytacazes (PICG) - T&D Sustentável",
      date: "Setembro/2023 - Abril/2024",
      tasks: `Realizei extração e análise de grandes volumes de dados utilizando Python, com bibliotecas como Pandas e NumPy para processamento e visualização. Desenvolvi modelos preditivos baseados em Regressão Linear para identificação de padrões e antecipação de tendências. Otimizei consultas SQL em MySQL, melhorando a performance no acesso e manipulação de dados. Gerei relatórios interativos e extraí insights estratégicos para embasar tomada de decisões dos stakeholders, contribuindo para otimização de processos.`,
    },
    {
      title: "Q&A",
      company: "Polo de Inovação Campos dos Goytacazes (PICG)",
      date: "Agosto/2022 - Setembro/2023",
      tasks: `Contribuí para modernização da Biblioteca ShouldDSL, migrando código para compatibilidade com Python 3. Implementei testes automatizados seguindo metodologia TDD, aumentando confiabilidade do desenvolvimento. Integrei testes utilizando Pytest com geração de relatórios detalhados em HTML para análise de qualidade do software. Identifiquei possíveis melhorias e contribuí para um processo de desenvolvimento mais eficiente e estruturado.`,
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