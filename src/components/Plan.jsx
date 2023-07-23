import { Component } from 'react';
import PlanButton from './PlanButton';

class Plan extends Component {
  render() {
    const { plan, method } = this.props;
    const { monthly, quarterly, semester, annual } = plan;
    return (
      <div className="card-plan">
        <div className="title">
          <h2>{method}</h2>
        </div>
        <PlanButton time={ monthly } />
        <PlanButton time={ quarterly } />
        <PlanButton time={ semester } />
        <PlanButton time={ annual } />
      </div>
    );
  }
}

export default Plan;
