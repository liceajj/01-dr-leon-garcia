import '../styles/TopInfo.css';

const TopInfo = () => {
  return (
    <div className="top-info">
      <p>
        📞 Teléfono: 55 35 17 61 77  |
        <a href="https://www.google.com/maps/search/?api=1&query=CDMX" target="_blank" rel="noopener noreferrer" className="location-link">
          📍 Ubicación: CDMX
        </a>
      </p>
    </div>
  );
};

export default TopInfo;
