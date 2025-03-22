import '../styles/headerSection.css';
import PropTypes from 'prop-types';


const HeaderSection = ({ backgroundImage, title }) => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-text">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

HeaderSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
};


export default HeaderSection;
