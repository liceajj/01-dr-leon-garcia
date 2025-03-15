import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopInfo from './assets/components/TopInfo';
import Header from './assets/components/Header';
import DoctorSection from './assets/components/DoctorSection';
import InfoSection from './assets/components/InfoSection'; 
import Services from './assets/components/Services';
import DoctorCard from './assets/components/DoctorCard';
import FloatingButtons from './assets/components/FloatingButtons';
import Footer from './assets/components/Footer';
import Map from './assets/components/Map';
import Appointment from './assets/components/Appointment';
import PhotoGallery from './assets/components/PhotoGallery';
import Traumatologia from './assets/components/Traumatologia';
import Ortopedia from './assets/components/Ortopedia';
import CirugiaArtroscopica from './assets/components/CirugiaArtroscopica';
import Contacto from './assets/components/Contacto';
import SobreMi from './assets/components/SobreMi';

function App() {
  return (
    <Router>
      <div className="App">
        <TopInfo />
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={(
              <>
                <DoctorSection />
                <InfoSection />
                <Services />
                <DoctorCard />
                <PhotoGallery />
                <Map />
                <Appointment />
              </>
            )} />
            <Route path="/traumatologia" element={<Traumatologia />} />
            <Route path="/ortopedia" element={<Ortopedia />} />
            <Route path="/cirugia-artroscopica" element={<CirugiaArtroscopica />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
          </Routes>
        </div>
        <FloatingButtons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
