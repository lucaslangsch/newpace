import { Component } from 'react';

class PlanButton extends Component {
  render() {
    const { time } = this.props;

    if (time.plan === 'PLANO TRIMESTRAL') {
      return (
        <button onClick={ () => {window.location.href = time.link} }>
          <span className="smal-font">equivale mensal</span>
          <br />
          {time.equivalent}
          <br />
          {time.plan}
          <br />
          {
          time.subscription
            ? <span className="smal-font">{`+ ${time.subscription} de matrícula`}</span>
            : <span className="smal-font">isento de matrícula</span>
        }
        </button>
      );
    }

    return (
      <button onClick={ () => {window.location.href = time.link} }>
        {time.value}
        <br />
        {time.plan}
        <br />
        {
          time.subscription
            ? <span className="smal-font">{`+ ${time.subscription} de matrícula`}</span>
            : <span className="smal-font">isento de matrícula</span>
        }
      </button>
    );
  }
}

export default PlanButton;
