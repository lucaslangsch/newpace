import { Component } from 'react';
import balta from '../assets/balta_01.png';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-about">
          <h2>SOMOS UMA <span className="strong">ASSESSORIA ESPORTIVA</span> QUE TRANSFORMA!</h2>
          <div>
            <h3>DESDE 2010 CUIDANDO DE VOCÊ</h3>
            <p>
              A NewPace Assessoria é especializada no treinamento de caminhada, corrida, natação, ciclismo e triatlo.
              Com 16 anos de experiência, atendemos nossos atletas tanto presencialmente em Florianópolis como remotamente em todo o Brasil.
              Os treinos são cuidadosamente elaborados por educadores físicos com conhecimento especializado.
              A NewPace está aqui para ajudá-lo a alcançar seus objetivos, seja uma melhor qualidade de vida,
              participar da sua primeira corrida, completar uma maratona ou conquistar o tão sonhado IronMan.
            </p>
          </div>
        </div>
        <div className="container-about-balta">
          <img src={ balta } alt="" />
          <div className="about-description">
            <h2>Rodrigo Baltazar</h2>
            <br />
            <p>Coach e fundador da NewPace</p>
            <p>Educador físico</p>
            <p>Mestre em Ciências do Movimento pela UDESC </p>
            <p>Treinador CBtri Nível 2 </p>
            <p>Treinador Pose Method of Running - EUA</p>
            <p>Certificação Bike Fit Trek/ Cycle Logic - EUA</p>
            <p>Certificação Bike Fit Shimano Montion Analyzer</p>
            <p>9 x IRONMAN finisher</p>
            <p>Atleta de Triathlon com mais de 20 anos de experiência</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
