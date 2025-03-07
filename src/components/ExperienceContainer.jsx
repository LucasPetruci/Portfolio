import React from "react";
import { MdWork } from "react-icons/md";
import "../styles/components/experienceContainer.sass";

const ExperienceContainer = () => {
  const experienceData = [
    {
      title: "Desenvolvedor mobile",
      company:
        "Polo de Inovação Campos dos Goytacazes (PICG) - SoftSeg e Embrapii",
      date: "Abril/2024 - Atualmente",
      tasks: `Atuo no desenvolvimento da aplicação mobile utilizando Flutter, criando soluções responsivas e bem estruturadas para proporcionar uma experiência de usuário intuitiva e eficiente. Em colaboração com a equipe de design e back-end, transformo protótipos em interfaces funcionais, garantindo que os aplicativos atendam aos requisitos técnicos e visuais. Sou responsável pela implementação de funcionalidades de geolocalização, integrando Google Maps e Geocoding para oferecer serviços baseados em localização de forma precisa e eficiente. Além disso, desenvolvo módulos nativos em Kotlin para aprimorar o suporte a GPS e funcionalidades específicas do Android, garantindo maior compatibilidade e desempenho. Para assegurar a estabilidade e qualidade do software, realizo consumo de APIs RESTful, gerenciamento de estado da aplicação com Provider e utilizo Firebase Crashlytics para monitoramento e resolução de erros, contribuindo para a otimização contínua da aplicação.`,
    },
     {
      title: "Desenvolvedor Full Stack",
      company:
        "JáCredenciei e FsTech",
      date: "Janeiro/2025 - Atualmente",
       tasks: `Desenvolvo e mantenho a aplicação mobile utilizando React Native, garantindo alto desempenho, fluidez e uma experiência de usuário otimizada. Além disso, atuo na manutenção e evolução de sistemas web em PHP, focando na otimização do código e na implementação de novas funcionalidades para melhorar a eficiência e a segurança das aplicações. Sou responsável pela integração de APIs RESTful, assegurando a comunicação eficaz entre os sistemas e o gerenciamento de bancos de dados. Para garantir escalabilidade e alta disponibilidade, utilizo AWS para hospedagem e otimização de infraestrutura, proporcionando soluções mais estáveis e eficientes.`,
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
