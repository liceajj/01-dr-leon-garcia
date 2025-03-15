//import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__location">
        <h3>Ubicación</h3>
        <a href='https://maps.app.goo.gl/2uRLJtDQfht3qJsY7' target="_blank" rel="noopener noreferrer">
          <p>Av Instituto Politécnico Nacional 5035, Capultitlan, Gustavo A. Madero, 07370 Ciudad de México, CDMX</p>
          </a>
      </div>
      <div className="footer__contact">
        <h3>Contacto</h3>
        <p>Tel: (+52)5535176177</p>
        <p>Email: drrodrigolgarcia@gmail.com</p>
      </div>
      <div className="footer__social">
        <h3>Redes Sociales</h3>
        <div className="footer__social-icons">

          {/*<a href="https://www.facebook.com/share/1XabYpkAVT/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>*/}

          <a href="https://www.instagram.com/drleon_tyo?igsh=eHAyYmNtcXlsdGx4" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
