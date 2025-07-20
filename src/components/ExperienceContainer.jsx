import React from "react";
import { MdWork } from "react-icons/md";
import "../styles/components/experienceContainer.sass";

const ExperienceContainer = () => {
  const experienceData = [
      {
        title: "Desenvolvedor Full Stack",
        company:
          "GCondo",
        date: "Abril/2025 - Atualmente",
        tasks: `Iniciei como estagiário curioso e, após dois meses, fui promovido a Desenvolvedor Júnior pelo desempenho e evolução técnica. Atuo na manutenção e evolução do sistema GCondo, com destaque para o desenvolvimento de um módulo de configuração que aumentou a autonomia dos usuários e reduziu chamados ao suporte. Atualmente, estou trabalhando no desenvolvimento de uma nova API com foco em melhorar o tempo de resposta em relação à versão anterior, contribuindo para uma aplicação mais rápida e eficiente. Também participei da correção de bugs críticos, implementação de melhorias contínuas e integrações com APIs RESTful, sempre em colaboração com profissionais experientes que aceleraram meu crescimento.`,
      },
     {
      title: "Desenvolvedor Full Stack",
      company:
        "FsTech",
      date: "Janeiro/2025 - Atualmente",
       tasks: `Sou responsável pela manutenção e evolução do site e do aplicativo da JáCredenciei, utilizando PHP e React Native, além de realizar integrações com APIs RESTful e sistemas de pagamento como PagBank, com homologação e configuração de webhooks. Também desenvolvi o MVP da Elomind e da Saúde.AI, criando páginas de vendas responsivas com Next.js e implementando um bot no WhatsApp com Python e Twilio utilizando Inteligência Artificial para atendimento ao cliente.`,
    },
    {
      title: "Desenvolvedor mobile",
      company:
        "Polo de Inovação Campos dos Goytacazes (PICG) - SoftSeg e Embrapii",
      date: "Abril/2024 - Junho/2025",
      tasks: `Trabalhei na criação de soluções responsivas e bem estruturadas, proporcionando uma experiência de usuário intuitiva e eficiente. Em colaboração com as equipes de design e back-end, transformei protótipos em interfaces funcionais, garantindo a conformidade com os requisitos técnicos e visuais. Implantei funcionalidades de geolocalização, integrando Google Maps e Geocoding para oferecer serviços baseados em localização de forma precisa e eficiente. Também desenvolvi módulos nativos em Kotlin para aprimorar o suporte a GPS e funcionalidades específicas do Android, assegurando maior compatibilidade e desempenho. Além disso, fui responsável pelo consumo de APIs RESTful, gerenciamento de estado da aplicação com Provider e utilização do Firebase Crashlytics para monitoramento e resolução de erros, contribuindo para a estabilidade e otimização contínua do software.`,
    },
    {
      title: "Analista de Dados",
      company: "Polo de Inovação Campos dos Goytacazes (PICG) - T&D Suntentável",
      date: "Setembro/2023 a Abril/2024",
      tasks: `Realizei a extração e análise de grandes volumes de dados utilizando Python, aplicando bibliotecas como Pandas e NumPy para processamento, tratamento e visualização de informações de forma eficiente. Desenvolvi modelos preditivos baseados em Regressão Linear, permitindo a identificação de padrões e a antecipação de tendências para otimização de processos. Além disso, otimizei consultas SQL em MySQL, melhorando a performance no acesso e manipulação dos dados, o que facilitou a geração de relatórios interativos e a extração de insights estratégicos para embasar a tomada de decisões dos stakeholders.`,
    },
    {
      title: "Q&A",
      company: "Polo de Inovação Campos dos Goytacazes (PICG)",
      date: "Agosto/2022 a Setembro/2023",
      tasks: `Contribuí para a modernização da Biblioteca ShouldDSL, migrando seu código para compatibilidade com Python 3 e garantindo sua funcionalidade em versões mais recentes da linguagem. Além disso, implementei testes automatizados seguindo a metodologia TDD, aumentando a confiabilidade e robustez do desenvolvimento. Trabalhei na integração de testes utilizando Pytest, permitindo a geração de relatórios detalhados em HTML para análise da qualidade do software e identificação de possíveis melhorias, contribuindo para um processo de desenvolvimento mais eficiente e estruturado.`,
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
