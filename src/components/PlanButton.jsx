import { Component } from 'react';
import ReactGA from "react-ga4";


class PlanButton extends Component {
event = () => {
  ReactGA.event({
    category: "your category",
    action: "your action",
    label: "your label", // optional
  });
  window.location.href = this.props.time.link
}

  render() {
    const { time } = this.props;

    if (time.plan === 'PLANO TRIMESTRAL') {
      return (
        <button onClick={ () => {this.event()} }>
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
      <button onClick={ () => {this.event()} }>
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
