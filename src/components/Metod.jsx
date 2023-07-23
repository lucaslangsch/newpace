import { Component } from 'react';
import './PlansGrid.css';

class Metod extends Component {
  render() {
    return (
      <section className="grid-plans">
        <div className="title-plan">
          <h2>
            NOSSAS METODOLOGIAS
          </h2>
        </div>
        <div className="card-plan">
          <div className="title">
            <h2>ONLINE</h2>
          </div>
          <p>Planilha semanal individualizada</p>
          <div className="linha-horizontal" />
          <p>Controle de treino via Trainus ou Training Peaks</p>
          <div className="linha-horizontal" />
          <p>Encontro presencial R$ 50,00</p>
          <div className="linha-horizontal" />
          <p>Alteração de treino até 1x no mês</p>
          <div className="linha-horizontal" />
          <p>Zonas de treino via percepção de esforço, pace, frequência cardíaca ou potência</p>
          <div className="linha-horizontal" />
          <p>Testes de esforço em campo</p>
          <div className="linha-horizontal" />
          <p>Contato via whatsapp ou email ILIMITADO</p>
        </div>
        <div className="card-plan">
          <div className="title">
            <h2>PRESENCIAL</h2>
          </div>
          <p>Planilha semanal individualizada</p>
          <div className="linha-horizontal" />
          <p>Controle de treino via Trainus ou Training Peaks</p>
          <div className="linha-horizontal" />
          <p>Até 4 encontros semanais</p>
          <div className="linha-horizontal" />
          <p>Alteração de treino até 2x no mês</p>
          <div className="linha-horizontal" />
          <p>Zonas de treino via percepção de esforço, pace, frequência cardíaca ou potência</p>
          <div className="linha-horizontal" />
          <p>Testes de esforço em campo</p>
          <div className="linha-horizontal" />
          <p>Contato via whatsapp ou email ILIMITADO</p>
        </div>
      </section>
    );
  }
}

export default Metod;
