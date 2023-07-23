import React, { Component } from 'react';
import './CardDepo.css';
import Slider from 'react-slick';
import depo1 from '../assets/run_14.jpeg';
import depo2 from '../assets/run_13.jpeg';
import depo3 from '../assets/run_16.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './ArrowCard';

class CardDepo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      cssEase: 'linear',
      lazyLoad: true,
    };

    return (
      <div className="slider">
        <h2>O QUE NOSSOS <span className="strong">ATLETAS</span> FALAM:</h2>
        <Slider { ...settings }>
          <div className="card-slider">

            <div className="container-2">
              <img src={ depo1 } alt="Foto da Vanessa" />
              <div className="container-athelete">
                <h2 className='athlete-name'>Vanessa Zomer</h2>
                <p className="container-depo">A <strong>NewPace</strong> é muito mais do que uma assessoria de corrida.
                  É uma família, um grupo de amigos e amigas que se ajudam e torcem uns pelos outros.
                  Cada um fica feliz com a conquista do outro, e isso é uma forma de incentivar cada vez mais a que continuemos nesta família NP.
                </p>
              </div>
            </div>
          </div>
          <div className="card-slider">

            <div className="container-2 depo-2">
              <img src={ depo2 } alt="Foto do José" />
              <div className="container-athelete">
                <h2>José Neto</h2>
                <p className="container-depo">A <strong>NewPace</strong> é uma equipe de treinamento de corredores e atletas apaixonados.
                  Com treinador dedicado, superamos limites e celebramos conquistas juntos. A corrida vai além do físico, fortalecendo a mente e aumentando a confiança.
                  A NewPace transforma vidas através da corrida, inspirando-nos a desafiar nossos limites e alcançar grandes feitos.
                </p>
              </div>
            </div>
          </div>
          <div className="card-slider">

            <div className="container-2">
              <img src={ depo3 } alt="Foto da Indiara" />
              <div className="container-athelete">
                <h2>Indiara Pitta</h2>
                <p className="container-depo">A <strong>NewPace</strong> é um local motivador para qualquer um se desenvolver e se superar.
                  Com esta assessoria, consigo me desafiar, com confiança em um treino específico para o meu nível, rotina e objetivos.
                  Temos um treinador muito dedicado e competente e, além disso, é uma comunidade de atletas muito animada.
                  O que nos motiva e nos impulsiona a sermos nossa melhor versão e estarmos sempre em busca de nossas pequenas e grandes metas.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CardDepo;
