import '../styles/traumatologia.css';
import HeaderSection from './HeaderSection';
import InfoService from './InfoService'
import AboutUs from './AboutUs';
import FormSection from './FormSection';
import logoImage from '../../../public/images/fondo-doc.jpg';  
import cirugiaImage1 from '../../../public/images/g-lesiones.jpeg';
import cirugiaImage2 from '../../../public/images/g-manguito.jpeg';
import cirugiaImage3 from '../../../public/images/HOMBRO.png';
import cirugiaImage4 from '../../../public/images/RODILLA.png';


const CirugiaArtroscopica = () => {
  return (
    <div className="traumatologia-page">
      <HeaderSection backgroundImage={logoImage} title="Especialistas en Cirugía Artroscópica" />
      <main className="traumatologia-container">
        <div className="content-trauma">
          <div className="left-section-trauma">
          <InfoService title="Artroscopia de hombro" description="La artroscopia de hombro es un procedimiento quirúrgico mínimamente invasivo que permite visualizar y tratar lesiones dentro de la articulación del hombro, como desgarros del manguito rotador, inestabilidad del hombro y pinzamiento subacromial. Utilizando pequeñas incisiones y una cámara especial, se realizan reparaciones con mínima invasión, lo que facilita una recuperación más rápida y menos dolorosa." image={cirugiaImage3} />
            <InfoService title="Artroscopia de rodilla" description="La artroscopia de rodilla es una técnica quirúrgica de mínima invasión utilizada para diagnosticar y tratar una variedad de problemas en la rodilla, como lesiones de meniscos, ligamentos, cartílago y la limpieza de cuerpos libres (fragmentos de hueso o cartílago). A través de pequeñas incisiones, se insertan una cámara y herramientas especializadas para realizar el tratamiento, lo que reduce el dolor y el tiempo de recuperación en comparación con las cirugías tradicionales." image={cirugiaImage4} />
            <InfoService title="Lesiones deportivas" description="Las lesiones deportivas abarcan una amplia gama de trastornos musculoesqueléticos causados ​​por la actividad física, como esguinces, fracturas, tendinitis y lesiones de ligamentos. Estos problemas pueden afectar a atletas de alto rendimiento o a personas que practican ejercicio de forma regular. El tratamiento incluye desde reposo y fisioterapia hasta cirugía mínimamente invasiva, dependiendo de la gravedad de la lesión." image={cirugiaImage1} />
            <InfoService title="Manguito rotador" description="El manguito rotador es un grupo de músculos y tendones que estabilizan el hombro y permiten su movimiento. Las lesiones del manguito rotador, como los desgarros o la tendinitis, son comunes, especialmente en personas activas o mayores. Los síntomas incluyen dolor, debilidad y limitación del rango de movimiento. El tratamiento puede incluir fisioterapia, medicamentos antiinflamatorios o cirugía artroscópica para reparar los tendones dañados." image={cirugiaImage2} />
           

          </div>
          <div className="right-section-trauma">
            <AboutUs />
            <FormSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CirugiaArtroscopica;
