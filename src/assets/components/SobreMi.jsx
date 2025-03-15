import '../styles/SobreMi.css';
import doctorImage from '../../../public/images/doc4.jpg'; 

function SobreMi() {
  return (
    <section className="about-me-section">
      <div className="about-me-image">
        <img src={doctorImage} loading="lazy" alt="Rodrigo León García" />
      </div>
      <div className="about-me-content">
        <h2>Sobre Mí</h2>
        <p>
          Soy Rodrigo León García, médico ortopedista con amplia experiencia en el diagnóstico y tratamiento de enfermedades y lesiones del sistema musculoesquelético. Desde el inicio de mi formación, he tenido un profundo compromiso con la salud y el bienestar de mis pacientes, ofreciendo una atención integral, cercana y personalizada.
        </p>
        <p>
          Mi filosofía se basa en el humanismo y la empatía, comprendiendo que cada paciente no solo busca aliviar un dolor, sino recuperar su calidad de vida, la independencia y la capacidad de disfrutar del movimiento. Por ello, mi compromiso va más allá del tratamiento: me esfuerzo en ofrecer soluciones que permitan a cada persona retomar sus actividades diarias, deportivas y recreativas con confianza y seguridad.
        </p>
        <p>
          Me especializo en cirugía artroscópica, una técnica avanzada que permite tratar lesiones articulares con precisión, reduciendo el tiempo de recuperación y permitiendo que mis pacientes regresen a sus actividades diarias, deportivas y recreativas en el menor tiempo posible. Como apasionado del deporte y el ejercicio, entendiendo la importancia de mantener un cuerpo en movimiento, para lograr el bienestar físico y mental.
        </p>
      </div>
    </section>
  );
}

export default SobreMi;
