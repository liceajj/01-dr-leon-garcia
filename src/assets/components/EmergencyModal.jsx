import Modal from 'react-modal';
import '../styles/EmergencyModal.css';
import { useState } from 'react';

// Importante: se debe llamar a Modal.setAppElement() en algún lugar de tu app (por ejemplo, en el index.js)
// Modal.setAppElement('#root');

function EmergencyModal({ isOpen, closeModal }) {
  const [formData, setFormData] = useState({
    name: '',
    symptoms: '',
    urgent: 'No',
    location: 'No'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, symptoms, urgent, location } = formData;
    const mensaje = `Nombre: ${name}%0A%0ASíntomas: ${symptoms}%0A%0A¿La cita la buscas para las próximas 24 hrs?: ${urgent}%0A%0A¿Estamos en CDMX, te queda bien?: ${location}`;
    const whatsappLink = `https://wa.me/525535176177?text=${mensaje}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="Modal"
      overlayClassName="Overlay"
      closeTimeoutMS={300} // Ajusta este valor según la duración de tu animación
    >
      <div className="modal__content" data-blendy-to="emergencyModal">
        <div className="modal__header">
          <h2 className="modal__title">
            Llena este pequeño formulario para agendar tu cita de valoración con el Médico Especialista en Ortopedia y Traumatología.
          </h2>
          <button className="modal__close" onClick={closeModal}>×</button>
        </div>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label>
            ¿Cuál es tu nombre?
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            ¿Qué síntomas tienes?
            <textarea name="symptoms" value={formData.symptoms} onChange={handleChange}></textarea>
          </label>
          <label>
            ¿La cita la buscas para las próximas 24 hrs?
            <select name="urgent" value={formData.urgent} onChange={handleChange}>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </label>
          <label>
            Estamos en CDMX, ¿te queda bien?
            <select name="location" value={formData.location} onChange={handleChange}>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Modal>
  );
}

export default EmergencyModal;
