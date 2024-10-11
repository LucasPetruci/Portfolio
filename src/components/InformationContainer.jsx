import "../styles/components/informationcontainer.sass";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:hiagoliv3ira@gmail.com";
  };

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/ok61zQmxLWXsREAA9", "_blank");
  };

  const handleLikedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/hiago-oliveira-520647212/",
      "_blank"
    );
  };

  return (
    <section id="information">
      <div className="info-card" onClick={handleLikedinClick}>
        <FaLinkedinIn id="linkedin-icon" />
        <div>
          <h3>LinkedIn</h3>
          <p>Hiago Oliveira</p>
        </div>
      </div>
      <div className="info-card" onClick={handleEmailClick}>
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>hiagoliv3ira@gmail.com</p>
        </div>
      </div>
      <div className="info-card" onClick={handleLocationClick}>
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Campos dos Goytacazes / RJ</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
