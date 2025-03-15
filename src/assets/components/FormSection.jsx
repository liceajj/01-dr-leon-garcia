import '../styles/formSection.css';
import { useState } from 'react';

const FormSection = () => {
  const [formData, setFormData] = useState({
    pregunta: '',
    nombre: '',
    apellido: '',
    correo: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { pregunta, nombre, apellido, correo, telefono } = formData;
    const mensaje = `Pregunta: ${pregunta}%0A%0ANombre del Paciente: ${nombre} ${apellido}%0ACorreo Electrónico: ${correo}%0ATeléfono: ${telefono}`;
    const whatsappLink = `https://wa.me/525535176177?text=${mensaje}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="form-section">
      <h2>Envíanos tus dudas médicas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pregunta">Pregunta</label>
          <textarea id="pregunta" name="pregunta" rows="4" value={formData.pregunta} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del Paciente</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido del Paciente</label>
          <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico</label>
          <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555L8 8.414l7.95-4.86A1 1 0 0 0 15 3H1a1 1 0 0 0-.95.555zM0 4.697v7.104l5.803-3.482L0 4.697zm6.761 4.396L1 12.803V14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.197l-5.761-3.71-1.175.716a.5.5 0 0 1-.528 0l-1.175-.716zm3.436-.374L16 4.697v7.104l-5.803-3.482z"/>
            </svg>
            Enviar Pregunta
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
