import { Component } from 'react';
import './JoinUs.css';

class JoinUs extends Component {
  render() {
    return (
      <div className="steps">

        <div className="step-container">
          <h2>COMO ENTRAR PARA A <span className="strong">NEWPACE:</span></h2>
          <div className="pre-step">
            <span className="step-number">1</span>
            <div className="shadow">
              <div className="rect" />
            </div>
            <h3>CORRIDA CICLISMO NATAÇÃO MULTIESPORTE</h3>
            <p>
              Escolha uma, duas ou três modalidades de acordo com suas necessidades, na NewPace as planilhas
              para cada esporte são montadas de acordo com suas limitações e afinidades, você pode optar por um treinamento
              avançado em corrida e dar suas primeiras braçadas na natação.
            </p>
          </div>
          <div className="pre-step">
            <span className="step-number step-number-to-align">2</span>
            <div className="shadow">
              <div className="rect-1" />
            </div>
            <h3>ONLINE PRESENCIAL</h3>
            <p>
              Opte por uma metodologia de trabalho, treine conosco 4x na semana ou faça seus treinos em casa ou na sua cidade.
              Com o treinamento online você mantêm contato semanalmente com seu educador através de email ou whatsapp e ainda
              pode marcar um aula avulsa presencial caso queira.
            </p>
          </div>
          <div className="pre-step">
            <span className="step-number step-number-to-align-2">3</span>
            <div className="shadow">
              <div className="rect-2" />
            </div>
            <h3>MENSAL TRIMESTRAL SEMESTRAL ANUAL</h3>
            <p>
              A NewPace oferece o treino ideal pra você de acordo com seus objetivos, necessidades e disponiblidade,
              opte por uma preparação mais curta até uma manutenção constante.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinUs;
