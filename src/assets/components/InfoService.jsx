import '../styles/infoService.css';
import PropTypes from 'prop-types';


const InfoService = ({ title, description, image }) => {
  const phoneNumber = "525535176177"; 
  const message = "Quiero agendar una cita el día"; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="info-section2">
      <h3>{title}</h3>
      <div className="content-container">
        <img src={image} loading="lazy" alt={title} />
        <p>{description}</p>
      </div>
      <a 
        href={whatsappLink} 
        className="btn-agendar" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Agendar Cita
      </a>
    </div>
  );
};

InfoService.propTypes = {
  description: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 

};


export default InfoService;
