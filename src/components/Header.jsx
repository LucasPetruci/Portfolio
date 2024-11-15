import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "../styles/components/header.sass";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header mobile-header">
      <h1>
        Lucas Petruci
      </h1>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
      </button>
      <nav className={`mobile-menu ${isMenuOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <a href="#Sobre Mim" onClick={closeMenu}>
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#Experiencia Profissional" onClick={closeMenu}>
              Experiencia Profissional
            </a>
          </li>
          <li>
            <a href="#Formação Acadêmica" onClick={closeMenu}>
              Formação Acadêmica
            </a>
          </li>
          <li>
            <a href="#Projetos" onClick={closeMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#Tecnologias" onClick={closeMenu}>
              Tecnologias
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
