import "../styles/components/informationcontainer.sass";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";

const InformationContainer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:lucaspetruci100@gmail.com";
  };

  const handleLikedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/lucaspetruci/",
      "_blank"
    );
  };

  return (
    <section id="information">
      <div className="info-card" onClick={handleLikedinClick}>
        <FaLinkedinIn id="linkedin-icon" />
        <div>
          <h3>LinkedIn</h3>
          <p>Lucas Petruci</p>
        </div>
      </div>
      <div className="info-card" onClick={handleEmailClick}>
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>lucaspetruci100@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
