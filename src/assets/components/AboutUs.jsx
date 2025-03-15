import '../styles/aboutUs.css';
import logoImage from '../../../public/images/logo1.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>Sobre Nosotros</h2>
      <img src={logoImage} loading="lazy" alt="Logo" style={{ width: '50%' }} />
      <p>Confía en nuestro equipo de expertos en ortopedia y traumatología, especializados en cirugía articular de alta complejidad. Nuestra pasión es devolverte la funcionalidad y el bienestar que mereces.</p>
    </div>
  );
};

export default AboutUs;
