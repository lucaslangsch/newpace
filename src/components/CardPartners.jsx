import './CardPartners.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TbWorldWww } from 'react-icons/tb'

function CardPartners(props) {
  return (
    <>
      <section className="grid-partners">
        <div className="card-partners">
          <img src={props.image} alt={props.image} />
          <div className='card-partners-content'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className='card-partners-link'>
              { props.site ? <a target="_blank" href={props.site}>
                <TbWorldWww />
              </a> : null }
              { props.instagram ? <a target="_blank" href={props.instagram}>
                <AiOutlineInstagram />
              </a> : null }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardPartners;