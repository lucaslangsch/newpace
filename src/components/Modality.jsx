import { Component } from 'react';
import logoTri from '../assets/logo_tri.png';
import logoBike from '../assets/logo_bike.png';
import logoRun from '../assets/logo_run.png';
import logoSwim from '../assets/logo_swim.png';
import './Modality.css';

class Modality extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-modal">
          <h2>QUAL <span className="strong">ESPORTE</span> É O SEU?</h2>
          <div className="modal">
            <div className="modal-image to-up swim">
              <img src={ logoSwim } alt="" />
            </div>
            <div className="modal-image bike">
              <img src={ logoBike } alt="" />
            </div>
            <div className="modal-image to-up run">
              <img src={ logoRun } alt="" />
            </div>
            <div className="modal-image tri">
              <img src={ logoTri } alt="" />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Modality;
