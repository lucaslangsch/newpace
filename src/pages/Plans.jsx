import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Plans.css';
import PlansGrid from '../components/PlansGrid';

class Plans extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="wrapper">
          <section className="module parallax parallax-3">
            <h1>PLANOS</h1>
            <p>
              | Conheça nossas opções de planos e metodologia |
            </p>
          </section>
          <PlansGrid />
        </main>
        <Footer />
      </>
    );
  }
}

export default Plans;
