import '../styles/headerSection.css';

const HeaderSection = ({ backgroundImage, title }) => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-text">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default HeaderSection;
