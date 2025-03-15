import '../styles/traumatologia.css';
import HeaderSection from './HeaderSection';
import InfoService from './InfoService'
import AboutUs from './AboutUs';
import FormSection from './FormSection';
import logoImage from '../../../public/images/fondo-doc.jpg'; 
import ortopediaImage1 from '../../../public/images/REEMPLAZO.png';
import ortopediaImage2 from '../../../public/images/DOLOR .png';
import ortopediaImage3 from '../../../public/images/MALFORMACIONES.png';
import ortopediaImage4 from '../../../public/images/MARCHA.png';
import ortopediaImage5 from '../../../public/images/g-piePlano.jpeg';
import ortopediaImage6 from '../../../public/images/PEDIATRICA.png';
import ortopediaImage7 from '../../../public/images/g-Infiltraciones.jpeg';
import ortopediaImage8 from '../../../public/images/OSEAS.png';




const Ortopedia = () => {
  return (
    <div className="traumatologia-page">
      <HeaderSection backgroundImage={logoImage} title="Atención médica especializada en ortopedia" />
      <main className="traumatologia-container">
        <div className="content-trauma">
          <div className="left-section-trauma">
            <InfoService title="Prótesis de rodilla o cadera" description="La prótesis de rodilla o cadera es un procedimiento quirúrgico en el que se reemplaza una articulación dañada o desgastada por una prótesis artificial. Este tratamiento está indicado para pacientes con artritis severa, fracturas o desgaste articular que no responden a tratamientos conservadores. La cirugía mejora el dolor y la movilidad, permitiendo a los pacientes recuperar una vida más activa y funcional." image={ortopediaImage1} />
            <InfoService title="Dolor lumbar" description="El dolor lumbar es una molestia que afecta la región baja de la espalda, causada por malas posturas, lesiones o desgaste de los discos intervertebrales. El tratamiento puede incluir fisioterapia, medicamentos o, en casos más graves, cirugía para corregir problemas como hernias discales." image={ortopediaImage2} />
            <InfoService title="Hallux valgus (juanete)" description="El hallux valgus es una deformidad en el dedo gordo del pie, donde este se desvía hacia los demás dedos, formando un bulto en la base del dedo. Esta condición puede causar dolor e inflamación, especialmente al usar zapatos ajustados. El tratamiento incluye desde cambios en el calzado y ejercicios hasta cirugía para corregir la deformidad en casos más graves." image={ortopediaImage3} />
            <InfoService title="Valoración de la marcha" description="La valoración de la marcha es un estudio detallado de cómo camina una persona para detectar posibles problemas en las piernas, caderas o espalda que puedan afectar la postura y el movimiento. Esta evaluación permite diseñar un plan de tratamiento adecuado para corregir alteraciones en la marcha y prevenir lesiones." image={ortopediaImage4} />
            <InfoService title="Pie plano" description="El pie plano es una condición en la que el arco del pie se aplana, lo que puede causar dolor en los pies, tobillos o piernas. Esto ocurre debido a un mal desarrollo del pie o el debilitamiento de los ligamentos. El tratamiento incluye ejercicios, plantillas ortopédicas o, en casos más graves, cirugía para restablecer la forma y función del pie." image={ortopediaImage5} />
            <InfoService title="Patología ortopédica pediátrica" description="La patología ortopédica pediátrica se refiere a los trastornos del sistema musculoesquelético en niños, como displasia de cadera, pie equinovaro, escoliosis y otras condiciones congénitas o adquiridas. El tratamiento se enfoca en técnicas no invasivas como el uso de férulas, yesos o fisioterapia, pero también puede requerir cirugía en casos más complejos. La intervención temprana es clave para asegurar el desarrollo adecuado del sistema musculoesquelético en los niños." image={ortopediaImage6} />
            <InfoService title="Infiltraciones" description="Este procedimiento consiste en la inyección de medicamentos directamente en la zona afectada para aliviar el dolor y la inflamación. Se utiliza comúnmente en el tratamiento de diversas condiciones ortopédicas, como tendinitis, bursitis y artritis, proporcionando un alivio rápido y efectivo." image={ortopediaImage7} />
            <InfoService title="Infecciones óseas" description="Este servicio se enfoca en el diagnóstico y tratamiento de infecciones que afectan los huesos, conocidas como osteomielitis. Estas infecciones pueden ser causadas por bacterias, hongos u otros microorganismos, y requieren un tratamiento especializado para prevenir complicaciones graves. El tratamiento puede incluir antibióticos, cirugía o una combinación de ambos, dependiendo de la gravedad y el tipo de infección." image={ortopediaImage8} />

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

export default Ortopedia;
