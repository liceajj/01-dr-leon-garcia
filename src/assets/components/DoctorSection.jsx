
import '../styles/doctorSection.css';

function DoctorSection() {
    return (
      <section className="doctor-section">
        <div className="doctor-info">
          <h2>Dr. Rodrigo León García</h2>
          <h3>Traumatología y Ortopedia <br/>Cirugía Artroscópica</h3>
          <p>
          Brindando atención ortopédica especializada con un enfoque humano y personalizado. Mi compromiso es ayudarte a recuperar tu movilidad y mejorar tu calidad de vida.
          </p>
          <button 
            onClick={() => window.open("https://wa.me/525535176177", "_blank", "noopener,noreferrer")}
            className="primary-button">Agendar Cita</button>
        </div>
        <div className="doctor-photo">
          <img src="../../images/doc4.jpg" loading="lazy" alt="Foto del Doctor" />
        </div>
      </section>
    );
  }
  
  export default DoctorSection;
  /*../../images/doc.jpg */