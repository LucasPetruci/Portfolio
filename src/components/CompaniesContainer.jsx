import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/components/companiesContainer.sass";
import { Autoplay } from "swiper/modules";

const CompaniesContainer = () => {
  const [companies, setCompanies] = useState([]);
  const [finalCompanies, setFinalCompanies] = useState([]);

  useEffect(() => {
    fetch("/companies.json")
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
        
        // Definimos o número mínimo necessário de empresas para um loop suave
        const minItemsNeeded = 10;
        
        if (data.length < minItemsNeeded) {
          // Apenas duplicamos se houver poucos elementos, mas sem exagero
          const repeatedCompanies = [];
          while (repeatedCompanies.length < minItemsNeeded) {
            repeatedCompanies.push(...data);
          }
          setFinalCompanies(repeatedCompanies.slice(0, minItemsNeeded)); // Garante um limite fixo
        } else {
          setFinalCompanies(data);
        }
      })
      .catch((error) => console.error("Erro ao carregar empresas:", error));
  }, []);

  return (
    <section className="companies-carousel">
      <h2>Atuação Profissional</h2>
      {finalCompanies.length > 0 ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          freeMode={true}
          style={{ overflow: "hidden" }}
        >
          {finalCompanies.map((company, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <a href={company.link} target="_blank" rel="noopener noreferrer">
                <img src={company.img} alt={company.name} className="company-logo" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Carregando empresas...</p>
      )}
    </section>
  );
};

export default CompaniesContainer;
