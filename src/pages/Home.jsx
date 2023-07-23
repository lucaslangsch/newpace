import { Component } from 'react';
import logoNewpace from '../assets/logo_newpace.png';
import Header from '../components/Header';
import About from '../components/About';
import './Home.css';
import Modality from '../components/Modality';
import HowToJoinUs from '../components/JoinUs';
import CardDepo from '../components/CardDepo';
import Footer from '../components/Footer';

class Home extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/planos');
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  
  render() {
    return (
      <>
        <Header />
        <main className="wrapper">
          <div>

            <section className="module parallax parallax-1">
              <img src={ logoNewpace } alt="" />
              <p>
                | Você não precisa ser bom para começar, precisa<strong> começar </strong>para ser bom |
              </p>
            </section>

            <section className="module content">
              <About />
            </section>

            <section className="module parallax parallax-2">
              <h1>MODALIDADES</h1>
              <button className="btn-plans" onClick={ this.handleClick }>CONHEÇA OS PLANOS</button>
            </section>

            <section className="module content">
              <Modality />
              <HowToJoinUs />
              <CardDepo />
            </section>

          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
