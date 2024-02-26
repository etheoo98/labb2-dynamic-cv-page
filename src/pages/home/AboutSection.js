import Portrait1 from "../../img/photos/portrait-1.webp";

function AboutSection() {
  return (
    <div id="om-mig" className="section-container about-section">
      <section className="section-content about-content">
        <h2 className="section-header" aria-label="Om mig">
          Om mig
        </h2>
        <div className="about-container">
          <div className="about-item portrait-item">
            <img
              className="portrait"
              src={Portrait1}
              alt="Ett porträtt av Theodor Hägg"
            />
          </div>
          <article className="about-item">
            <h3>Passionerad Problemlösare</h3>
            <p>
              Jag är en systemutvecklare med kompetens inom Frontend och
              Backend.
            </p>
            <p>
              I mitt dagliga arbete strävar jag inte bara efter att lösa
              problem, utan att leverera smarta, användarvänliga och effektiva
              lösningar med hög precision för att leva upp till efterfrågan från
              vårt digitala samhälle.
            </p>
            <p>
              Med min passion för systemuveckling strävar jag efter att utveckla
              mina färdigheter tillsammans med liksinnade för att nyttja
              kamratskap och ta lärdom av varandras erfarenheter.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
