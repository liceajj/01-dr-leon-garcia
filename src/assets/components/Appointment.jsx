
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../styles/appointment.css';
import backgroundImage from '../../../public/images/post2.jpg'; 
function Appointment() {
  const phoneNumber = 'tel:+525535176177'; 
  const whatsappLink = 'https://wa.me/525535176177'; 

  return (
    <div className="appointment" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <div className="appointment__content">
          <h2>Agenda una consulta</h2>
          <p>¿Te gustaría programar una consulta? Haz clic en el botón que aparece en el encabezado, o también puedes utilizar el formulario en la sección de contacto para pedir más información o agendar una cita.</p>
          <div className="appointment__buttons">
            <a href={phoneNumber} className="appointment__button phone-button">
              <FaPhone className="button-icon" /> Llamar
            </a>
            <a href={whatsappLink} className="appointment__button whatsapp-button">
              <FaWhatsapp className="button-icon" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
