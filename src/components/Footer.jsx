import './Footer.css';
import { IconContext } from "react-icons";
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

function Footer() {
  return (
    <IconContext.Provider value={{ size: "50px", color: 'white'}}>
    <footer className="footer-home">
      <div className="footer-left">
        <h2>FIQUE POR  DENTRO DO NOSSO <span className="strong-footer"> CONTEÚDO: </span></h2>
        <nav className="nav-footer-link">
          <a className="link" target="_blank" href="https://www.instagram.com/newpaceassessoria/"><AiOutlineInstagram /></a>
          <a className="link" target="_blank" href="https://wa.me/5548999408873?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20Newpace"><AiOutlineWhatsApp /></a>
        </nav>
      </div>
      <div className="footer-right">
        <h2>QUER SER NOSSO <span className="strong-footer"> PARCEIRO? </span></h2>
        <p>Conheça o clube NP, e venha integrar nossa rede técnica de empresas e profissionais.</p>
        <a className="link-partners" target="_blank" href="https://wa.me/5548998544763?text=Ol%C3%A1,%20como%20fa%C3%A7o%20para%20ser%20um%20dos%20parceiros%20da%20Newpace%20Assessoria?">saiba mais <span className="t">&gt;&gt;&gt;</span></a>
      </div>
    </footer>
    </IconContext.Provider>
  );
}

export default Footer;
