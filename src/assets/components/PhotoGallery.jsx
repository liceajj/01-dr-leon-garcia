import '../styles/PhotoGallery.css';
import { Link } from 'react-router-dom';

const photos = [
  { title: 'Esguince', src: '../../../images/g-esguince.jpeg', link: '/traumatologia#esguince' },
  { title: 'Fracturas', src: '../../../images/g-fractura.jpeg', link: '/traumatologia#fracturas' },
  { title: 'Contusiones', src: '../../../images/g-contusion.jpeg', link: '/traumatologia#contusiones' },
  { title: 'Luxaciones', src: '../../../images/g-luxacion.jpeg', link: '/traumatologia#luxaciones' },
  { title: 'Colocación/Retiro de Yeso/Fibra de Vidrio', src: '../../../images/g-yeso.jpeg', link: '/traumatologia#luxaciones' },
  { title: 'Interpretación de Radiografías y Estudios', src: '../../../images/g-radiografías.jpeg', link: '/traumatologia#luxaciones' },
  { title: 'Prótesis de rodilla, cadera', src: '../../../images/g-protesis.jpeg', link: '/ortopedia' },
  { title: 'Dolor lumbar', src: '../../../images/g-lumbar.jpeg', link: '/ortopedia' },
  { title: 'Hallux valgus (juanete)', src: '../../../images/g-juanete.jpeg', link: '/ortopedia' },
  { title: 'Valoración de la marcha', src: '../../../images/g-marcha.jpeg', link: '/ortopedia' },
  { title: 'Pie plano', src: '../../../images/g-piePlano.jpeg', link: '/ortopedia' },
  { title: 'Patología ortopédica pediátrica', src: '../../../images/g-patologiaPedi.jpeg', link: '/ortopedia' },
  { title: 'Infiltraciones', src: '../../../images/g-Infiltraciones.jpeg', link: '/ortopedia' },
  { title: 'Infecciones óseas', src: '../../../images/g-óseas.jpeg', link: '/ortopedia' },
  { title: 'Lesiones', src: '../../../images/g-lesiones.jpeg', link: '/cirugia-artroscopica' },
  { title: 'Manguito rotador', src: '../../../images/g-manguito.jpeg', link: '/cirugia-artroscopica' },
  { title: 'Artroscopia de hombro', src: '../../../images/g-hombro.jpeg', link: '/cirugia-artroscopica' },
  { title: 'Artroscopia de rodilla', src: '../../../images/g-rodilla.jpeg', link: '/cirugia-artroscopica' },
];

const PhotoGallery = () => {
  return (
    <section className="photo-gallery">
      <h2>¿Cómo puedo ayudarte?</h2>
      <div className="gallery">
        {photos.map((photo, index) => (
          <Link to={photo.link} key={index}>
            <div className="gallery-item">
              <img src={photo.src} loading="lazy" alt={photo.title} />
              <div className="overlay">
                <div className="text">{photo.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
