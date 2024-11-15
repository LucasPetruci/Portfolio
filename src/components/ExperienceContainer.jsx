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
      tasks: `
      • Responsável pelo desenvolvimento de interfaces em Flutter para aplicativos móveis com base layout no Figma.
      • Colaboração com a equipe de design e back-end para criar uma experiência de usuário intuitiva.
      • Responsável por corrigir bugs e otimizar o desempenho das aplicações.
      • Integração com API do Google.
      • Criação de código em linguagem nativa para comunicação com Flutter.
      • Utilização de Design Pattern - MVC.
      • Utilização dos princípios de SOLID.
      • Consumo de APIs em RESTful com package HTTP.
      • Gerenciamento de estado e injeção de dependência com Provider.
      • Versionamento de código com Git.
      • Utilização de deep linking.
      • Experiência em Kanban como modelo ágil.
      `,
    },
    {
      title: "Analista de Dados",
      company: "Polo de Inovação Campos dos Goytacazes (PICG) - T&D Suntentável",
      date: "Setembro/2023 a Abril/2024",
      tasks:
      `
      • Responsável por extração e análise de dados sobre consumo de água.
      • Extração de dados de planilha em python, utilizando a biblioteca pandas.
      • Persistência de dados em MySql.
      • Utilização de regressão linear para predição de novos dados.
      `,
    },
    {
      title: "Q&A",
      company: "Polo de Inovação Campos dos Goytacazes (PICG)",
      date: "Agosto/2022 a Setembro/2023",
      tasks:
      `
      • Responsável pela atualização da Biblioteca ShouldDSL para Python 3.
      • Teste de software utilizando TDD.
      • Integração com Pytest para gerar relatório em html
      `,
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
