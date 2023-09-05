import './CardPartners.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TbWorldWww } from 'react-icons/tb'

function CardPartners(props) {
  return (
    <>
      <div className="card-partners">
        <img src={props.image} alt={props.title} />
        <div className='card-partners-content'>
          <h2>{props.title}</h2>
          {props.aditional && <small>{props.aditional}</small>}
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
    </>
  );
}

export default CardPartners;
