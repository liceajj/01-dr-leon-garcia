import '../styles/traumatologia.css';
import HeaderSection from './HeaderSection';
import InfoService from './InfoService';
import AboutUs from './AboutUs';
import FormSection from './FormSection';
import logoImage from '../../../public/images/fondo-doc.jpg';
import esguinceImage from '../../../public/images/g-esguince.jpeg';
import fracturasImage from '../../../public/images/FRACTURAS.png';
import contusionesImage from '../../../public/images/g-contusion.jpeg';
import luxacionesImage from '../../../public/images/LUXACIONES.png';
import yesoImage from '../../../public/images/YESO.png';
import radiografiasImage from '../../../public/images/RADRIOGRAFIAS.jpeg';


const Traumatologia = () => {
  return (
    <div className="traumatologia-page">
      <HeaderSection backgroundImage={logoImage} title="¿Buscas atención médica especializada en traumatología?" />
      <main className="traumatologia-container">
        <div className="content-trauma">
          <div className="left-section-trauma">
            <InfoService id="esguince" title="Esguince" description="Un esguince es una lesión en los ligamentos que conectan los huesos, causada por un estiramiento o desgarro debido a un movimiento brusco o una caída. Los síntomas incluyen dolor, irritación y dificultad para mover la zona afectada. El tratamiento puede variar desde reposo y fisioterapia hasta cirugía, dependiendo de la gravedad del esguince." image={esguinceImage} />
            <InfoService id="fracturas"  title="Fracturas" description="Una fractura es la ruptura de un hueso, que puede ocurrir por traumatismos, caídas o movimientos violentos. El tratamiento puede incluir inmovilización, cirugía o terapia de rehabilitación según la ubicación y la gravedad de la fractura." image={fracturasImage} />
            <InfoService id="contusiones" title="Contusiones" description="Las contusiones son lesiones en los tejidos blandos, como músculos o tendones, causadas por un golpe o impacto directo. Aunque no afecta los huesos, pueden causar dolor, hinchazón y cambio de color en la piel. Generalmente, se tratan con reposo, hielo y medicamentos para aliviar el dolor." image={contusionesImage} />
            <InfoService id="luxaciones" title="Luxaciones" description="Una luxación ocurre cuando los huesos de una articulación se salen de su lugar. Esto puede suceder por un impacto fuerte o un giro forzado, y causa dolor intenso, hinchazón y deformidad en la zona afectada. El tratamiento implica la reducción (colocar el hueso nuevamente en su posición) y, en algunos casos, cirugía para reparar ligamentos o estructuras dañadas." image={luxacionesImage} />
            <InfoService id="yeso" title="Colocación/Retiro de Yeso/Fibra de Vidrio" description="Este procedimiento inmoviliza fracturas y lesiones óseas con yeso o fibra de vidrio, materiales que estabilizan el hueso para una correcta curación. El retiro, realizado con herramientas especiales, asegura la integridad de la piel y los tejidos." image={yesoImage} />
            <InfoService id="radiografias" title="Interpretación de Radiografías y Estudios" description="Este servicio implica el análisis detallado de imágenes diagnósticas, como radiografías, resonancias magnéticas y tomografías computarizadas, para identificar fracturas, lesiones, enfermedades óseas y otras anomalías. Una interpretación precisa es fundamental para un diagnóstico correcto y la planificación del tratamiento adecuado." image={radiografiasImage} />
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

export default Traumatologia;
