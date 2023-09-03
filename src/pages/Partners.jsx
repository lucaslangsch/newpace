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
          <section className="grid-partners">
            { partners.map((partner) => {
              return <CardPartners
                key={partner.title}
                description={partner.description}
                image={partner.image}
                title={partner.title}
                site={partner.site}
                instagram={partner.instagram}/>
            })}
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
 
export default Partners;