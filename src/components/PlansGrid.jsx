import { Component } from 'react';
import './PlansGrid.css';
import Plan from './Plan';
import { oneSport, twoSport, threeSport } from '../helpers/plans.js';
import Metod from './Metod';

class PlansGrid extends Component {
  render() {
    return (
      <>
        <section className="grid-plans">
          <div className="title-plan reason">
            <h2>
              INDIVIDUALIDADE
            </h2>
            <p>Respeitamos às individualidades com planilhas personalizadas voltadas para os objetivos, pontos fortes e limitações de cada um.</p>
          </div>
          <div className="title-plan reason">
            <h2>
              PROFISSIONALISMO
            </h2>
            <p>Você terá o acompanhamento de um educador físico para dar feedbacks e realizar as alterações necessárias.</p>
          </div>
          <div className="title-plan reason">
            <h2>
              SUA AGENDA
            </h2>
            <p>A agenda de treinos é montada de acordo com a sua rotina. E claro, dentro dos seus objetivos!</p>
          </div>
        </section>
        <Metod />
        
        <section className="grid-plans">
          <div className="title-plan">
            <h2>
              UMA MODALIDE: APÓS A COMPRA VOCÊ DEFINE ENTRE
              <span className="strong"> CORRIDA</span>
              <span>, </span>
              <span className="strong">CICLISMO</span>
              <span>, </span>
              <span className="strong">NATAÇÃO</span>
              &nbsp;
              OU
              &nbsp;
              <span className="strong"> MUSCULAÇÃO</span>
            </h2>
          </div>
          <Plan plan={ oneSport.online } method="ONLINE" />
          <Plan plan={ oneSport.presential } method="PRESENCIAL" />
        </section>
        
        <section className="grid-plans">
          <div className="title-plan">
            <h2>
              DUAS MODALIDADES: APÓS A COMPRA VOCÊ ESCOLHE QUAIS DESEJA NO SEU
              &nbsp;
              <span className="strong">DUATLO</span>
            </h2>
          </div>
          <Plan plan={ twoSport.online } method="ONLINE" />
          <Plan plan={ twoSport.presential } method="PRESENCIAL" />
        </section>
        
        <section className="grid-plans">
          <div className="title-plan">
            <h2>
              TRÊS MODALIDES OU&nbsp;
              <span className="strong">TRIATLO:</span>
            </h2>
          </div>
          <Plan plan={ threeSport.online } method="ONLINE" />
          <Plan plan={ threeSport.presential } method="PRESENCIAL" />
        </section>
      </>
    );
  }
}

export default PlansGrid;
