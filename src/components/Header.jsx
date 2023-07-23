import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../assets/logo_np.png';
import { IconContext } from "react-icons";

function Header() {
  const [headerOpacity, setHeaderOpacity] = useState(false);
  const [btnMenuActive, setBtnMenuActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setHeaderOpacity(isScrolled);
    };

    const handleClickOutsideMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setBtnMenuActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, [btnMenuActive]);

  const btnMenu = () => {
    setBtnMenuActive(!btnMenuActive)
  };

  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
    <header className={ `${headerOpacity ? 'scrolled' : ''} header` }>
      <img src={ logo } alt="" />
      <nav ref={menuRef} className={`header-nav ${btnMenuActive ? 'active' : ''}`}>
        <button className='btn-display-mobile' onClick={btnMenu}><AiOutlineMenu /></button>
        <ul className='menu-desktop'>
          <Link to="/">INÍCIO</Link>
          <Link to="/planos" >PLANOS</Link>
          <Link to="/locais">LOCAIS DE TREINO</Link>
          <a target="_blank" href="https://www.instagram.com/newpaceassessoria/" rel="me">
            {btnMenuActive === true ? <span>INSTAGRAM</span> : <AiOutlineInstagram />}
          </a>
          <a className='last' target="_blank" href="https://wa.me/5548999408873?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20Newpace" rel="me">
            {btnMenuActive === true ? <span>WHATSAPP</span> : <AiOutlineWhatsApp />}
          </a>
        </ul>
      </nav>
    </header>
    </IconContext.Provider>
  );
}

export default Header;