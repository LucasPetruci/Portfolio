import React from "react";
import { PiMedalBold } from "react-icons/pi";
import "../styles/components/educationContainer.sass";

const EducationContainer = () => {
  const educationData = [
    {
      title: "Bacharelado em Sistemas de Informação",
      institution: "Instituto Federal Fluminense",
      date: "2020 - 2025",
    },
  ];

  return (
    <section className="education-container">
      <h2>Formação Acadêmica</h2>
      {educationData.map((education, index) => (
        <div key={index} className="education-item">
          <PiMedalBold className="education-icon" />
          <div className="info">
            <h3>{education.title}</h3>
            <h4 className="institution">{education.institution}</h4>
            <span>{education.date}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EducationContainer;
