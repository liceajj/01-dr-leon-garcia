import '../styles/servicesList.css';
import { Link } from 'react-router-dom';

const ServicesList = () => {
  return (
    <div className="services-list">
      <h2>Otros Servicios</h2>
      <ul>
        <li><Link to="/traumatologia#esguince">Esguince</Link></li>
        <li><Link to="/traumatologia#fracturas">Fracturas</Link></li>
        <li><Link to="/traumatologia#contusiones">Contusiones</Link></li>
        <li><Link to="/traumatologia#luxaciones">Luxaciones</Link></li>
        <li><Link to="/ortopedia">Prótesis de rodilla o cadera</Link></li>
        <li><Link to="/ortopedia">Dolor lumbar</Link></li>
        <li><Link to="/ortopedia">Hallux valgus (juanete)</Link></li>
        <li><Link to="/ortopedia">Valoración de la marcha</Link></li>
        <li><Link to="/ortopedia">Pie plano</Link></li>
        <li><Link to="/ortopedia">Patología ortopédica pediátrica</Link></li>
        <li><Link to="/cirugia-artroscopica">Lesiones deportivas</Link></li>
        <li><Link to="/cirugia-artroscopica">Manguito rotador</Link></li>
        <li><Link to="/cirugia-artroscopica">Artroscopia de hombro</Link></li>
        <li><Link to="/cirugia-artroscopica">Artroscopia de rodilla</Link></li>
      </ul>
    </div>
  );
};

export default ServicesList;
