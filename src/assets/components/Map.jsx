import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/Map.css';
/* global process */


const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 19.47921213255866,
  lng: -99.13607794234274
};

const location = 'CARCIS MEDICAL';

function Map() {
  const handleMarkerClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
  };

  const handleDirectionsClick = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}`, '_blank');
  };

  return (
    <div className="map-container">
      <div className="map-info">
        <h2>CARCIS MEDICAL</h2>
        <button onClick={handleDirectionsClick}>Cómo llegar</button>
      </div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <Marker position={center} onClick={handleMarkerClick} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
