import { useState } from 'react';
import { FaStar, FaGraduationCap, FaBriefcaseMedical, FaCertificate, FaChalkboardTeacher } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";
import '../styles/doctorCard.css';
import doctorPhoto from '../../../public/images/doc1.jpg'; 

const DoctorCard = () => {
  const [selectedSection, setSelectedSection] = useState('');

  const sections = [
    {
      title: 'Pregrado',
      content: (
        <ul>
          <li><strong>Licenciatura en Medicina</strong>: Universidad Nacional Autónoma de México, Facultad de Medicina, CU</li>
          <li><strong>Hospital Internado Médico</strong>:
            <ul>
              <li>IMSS Hospital General de Zona 50, San Luis Potosí</li>
              <li>IMSS Hospital General de Zona 1, San Luis Potosí</li>
            </ul>
          </li>
          <li><strong>Servicio Social</strong>: Hospital General Dr. Manuel Gea González, Clínica de trastornos del movimiento</li>
        </ul>
      ),
      icon: <FaGraduationCap />
    },
    {
      title: 'Posgrado',
      content: (
        <ul>
          <li><strong>Especialidad en Ortopedia y Traumatología</strong>: IMSS Hospital de Traumatología y Ortopedia Dr. Victorio de la Fuente Narváez</li>
          <li><strong>Subespecialidad en Cirugía Artroscópica</strong>: IMSS Hospital de Ortopedia Dr. Victorio de la Fuente Narváez Servicio de cirugía articular Reconstructiva</li>
        </ul>
      ),
      icon: <SiGooglescholar />
    },
    {
      title: 'Experiencia Profesional',
      content: (
        <ul>
          <li><strong>Jornadas Quirúrgicas de Ortopedia Pediatrica IMSS 2024, HR no 30 Ixmiquilpan</strong></li>
          <li><strong>Subespecialidad en Cirugía Artroscópica</strong></li>
          <li><strong>IMSS Hospital de Traumatología y Ortopedia Dr. Victorio de la Fuente Narváez</strong></li>
          <li><strong>IMSS Hospital de Ortopedia Dr. Victorio de la Fuente Narváez Servicio de cirugía articular Reconstructiva</strong></li>
      </ul>
      ),
      icon: <FaBriefcaseMedical />
    },
    {
      title: 'Certificaciones',
      content: (
        <ul>
          <li><strong>Certificado por el Colegio Mexicano de Ortopedia y Traumatología</strong></li>
        </ul>
      ),
      icon: <FaCertificate />
    },
    {
      title: 'Congresos y Conferencias',
      content: (
        <ul>
          <li><strong>Miembro de la Federación Mexicana de Colegios de Ortopedia y Traumatología A. C.</strong></li>
        </ul>
      ),
      icon: <FaChalkboardTeacher />
    },
  ];

  const handleSectionClick = (title) => {
    setSelectedSection(title === selectedSection ? '' : title);
  };

  return (
    <div className="doctor-card">
      <div className="doctor-left">
        <img src={doctorPhoto} loading="lazy" alt="Foto del Doctor" />
        <div className="rating">
          {Array(5).fill().map((_, i) => (
            <FaStar key={i} className="star" color="#FFD700" />
          ))}
          <p>Basado en las opiniones positivas de los pacientes</p>
        </div>
      </div>
      <div className="doctor-right">
        <h2>Dr. Rodrigo León García</h2>
        <h3>Especialidad en [Traumatología y Ortopedia, Cirugía Artroscópica]</h3>
        <p>Cédula Profesional: 12338223</p>
        <div className="menu">
          {sections.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => handleSectionClick(section.title)}
                className={`menu-button ${selectedSection === section.title ? 'selected' : ''}`}
              >
                {section.icon} {section.title} <span className="arrow">{selectedSection === section.title ? '▼' : '►'}</span>
              </button>
              {selectedSection === section.title && (
                <div className="menu-content">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
