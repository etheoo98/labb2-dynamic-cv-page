import Hero from "../../img/photos/hero.webp";

function HeroSection() {
  return (
    <div className="hero-container">
      <img
        className="hero-image"
        src={Hero}
        alt="Ett fotografi av Theodor Hägg"
      />
      <section className="section-content hero-content">
        <h2>
          Hej, mitt namn är
          <br />
          <span className="name-span">
            Theodor <span className="highlight-text">Hägg</span>
          </span>
          <br />
          Jag är en systemutvecklare
        </h2>
      </section>
    </div>
  );
}

export default HeroSection;
