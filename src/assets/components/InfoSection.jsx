import '../styles/InfoSection.css';
import { FaStethoscope, FaHeartbeat, FaNotesMedical, FaUserMd } from 'react-icons/fa';

function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-image3">
        <img src="../../images/doc.jpg" loading="lazy" alt="Imagen relacionada" />
      </div>
      <div className="info-content">
        <div className="info-row">
          <div className="info-box">
            <h3>
              <FaStethoscope className="icon-animation" /> Especialistas en lesiones y trastornos óseos y musculares.
            </h3>
            <p> Ofrecemos diagnósticos y tratamientos eficaces, centrados en el sistema musculoesquelético.</p>
          </div>
          <div className="info-box">
            <h3>
              <FaHeartbeat className="icon-animation" /> Tratamientos personalizados para tu recuperación.
            </h3>
            <p>Utilizamos una amplia gama de técnicas, incluyendo medicamentos, terapia física y cirugía, para mejorar tu función y eliminar el dolor.</p>
          </div>
        </div>
        <div className="info-row">
          <div className="info-box">
            <h3>
              <FaNotesMedical className="icon-animation" /> Diagnóstico preciso basado en la experiencia clínica.
            </h3>
            <p>Nuestra amplia experiencia y conocimiento nos permiten realizar diagnósticos precisos a través de una evaluación clínica detallada. Cuando se requieren pruebas de imagen, colaboramos con centros especializados para garantizar la mejor calidad.</p>
          </div>
          <div className="info-box">
            <h3>
              <FaUserMd className="icon-animation" /> Seguimiento postoperatorio y rehabilitación personalizada.
            </h3>
            <p>Supervisamos tu recuperación postoperatoria y te ofrecemos un plan de rehabilitación personalizado. Estamos disponibles para resolver tus dudas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;

  /*../../images/doc.jpg */