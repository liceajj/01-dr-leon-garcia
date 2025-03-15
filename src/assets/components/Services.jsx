import '../styles/services.css';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Traumatología',
    link: '/traumatologia',
    features: [
      '<strong>Esguince:</strong>  Tratamiento y rehabilitación de ligamentos afectados.',
      '<strong>Fracturas:</strong>  Diagnóstico y manejo de huesos rotos.',
      '<strong>Contusiones:</strong>  Atención especializada para golpes y hematomas.',
      '<strong>Luxaciones:</strong>  Reducción y recuperación de articulaciones dislocadas.',
      '<strong>Colocación/Retiro de Yeso/Fibra de Vidrio:</strong>  Inmovilización y cuidado de fracturas y lesiones con materiales de alta calidad.',
      '<strong>Interpretación de Radiografías y Estudios:</strong>  Análisis detallado de imágenes para un diagnóstico preciso y un plan de tratamiento efectivo.'

    ],
  },
  {
    title: 'Ortopedia',
    link: '/ortopedia',
    features: [
      '<strong>Prótesis de rodilla o cadera:</strong>  Soluciones para mejorar la movilidad.',
      '<strong>Dolor lumbar:</strong>  Evaluación y tratamiento del dolor de espalda baja.',
      '<strong>Hallux valgus (juanete):</strong>  Corrección y manejo del desvío del dedo gordo.',
      '<strong>Valoración de la marcha:</strong>  Análisis y mejora del patrón al caminar.',
      '<strong>Pie plano:</strong>  Diagnóstico y opciones de tratamiento.',
      '<strong>Patología ortopédica pediátrica:</strong>  Cuidado especializado para niños.',
      '<strong>Infiltraciones:</strong> Aplicación de medicamentos directamente en la zona afectada para aliviar el dolor y la inflamación de manera precisa y efectiva.',
      '<strong>Infecciones óseas:</strong>  Tratamiento de infecciones en los huesos.'

    ],
  },
  {
    title: 'Cirugía Artroscópica',
    link: '/cirugia-artroscopica',
    features: [
      '<strong>Lesiones deportivas:</strong>  Tratamiento mínimamente invasivo para deportistas.',
      '<strong>Manguito rotador:</strong>  Cirugía artroscópica para problemas en el hombro.',
      '<strong>Artroscopia de hombro:</strong>  Procedimientos para mejorar la movilidad articular.',
      '<strong>Artroscopia de rodilla:</strong>  Cirugía mínimamente invasiva para lesiones en la rodilla.'
    ],
  },
];

const Services = () => {
  return (
    <section id="blog" className="blog-section">
      <h2>Servicios</h2>
      <div className="blog-cards">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="card-image">
              <img src={`../images/post${index + 1}.jpg`} loading="lazy" alt={`Imagen de ${post.title}`} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{post.title}</h3>
              <ul className="card-features">
                {post.features.map((feature, featureIndex) => (
                  <li key={featureIndex} dangerouslySetInnerHTML={{ __html: feature }}></li>
                ))}
              </ul>
              <div className="contact-buttons">
                <Link to={post.link} className="card-button">Leer más</Link>
                <a 
                  href="https://wa.me/525535176177" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="common-button services-whatsapp-button"
                >
                  <FaWhatsapp className="icon" /> Agendar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
