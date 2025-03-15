import Map from './Map';
import '../styles/Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contact-card">
        <Map />
        <div className="contact-info">
          <h3>CARCIS MEDICAL</h3>
          <p><strong>Ubicación:</strong> CDMX</p>
          <p><strong>Teléfono:</strong> (+52) 55 35 17 61 77</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/525535176177" target="_blank" rel="noopener noreferrer">(+52) 55 35 17 61 77</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
