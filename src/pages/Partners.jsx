import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardPartners from '../components/CardPartners';
import partners from '../helpers/partners';
import './Partners.css';

class Partners extends Component {
  render() { 
    return (
      <>
        <Header />
        <main className="wrapper">
          <section className="module parallax parallax-5">
            <h1>PARCEIROS</h1>
            <p>
              | Conheça nossas parcerias |
            </p>
          </section>
          <CardPartners description={partners.wave.description} image={partners.wave.image} title={partners.wave.title} site={partners.wave.site} instagram={partners.wave.instagram}/>
        </main>
        <Footer />
      </>
    );
  }
}
 
export default Partners;