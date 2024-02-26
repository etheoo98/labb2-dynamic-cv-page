import CvData from "./Cv.json";
import Portrait2 from "../../img/photos/portrait-2.webp";

function CvSection() {
  return (
    <div id="cv" className="section-container cv-container">
      <div className="section-content cv-content">
        <article>
          <h2 className="section-header">Cv</h2>
          <div className="main-article">
            <div className="article-right">
              <p>
                Erfaren och passionerad IT-entusiast med en bred kompetens inom
                programmering och systemutveckling. Erfarenhet omfattar både
                Frontend och Backend, systemarkitektur, databasmodellering samt
                säkerhet och sekretess. Stark teknisk kompetens kombinerat med
                engagemang för att hålla sig uppdaterad med de senaste trenderna
                inom IT-branschen.
              </p>

              <h3 className="cv-header">Utbildning</h3>

              {CvData.education.map((object) => (
                <ul className="cv-education-list cv-list">
                  <li>{object.school}</li>
                  <li>{object.program}</li>
                  <li>{object.location}</li>
                  <li>{object.duration}</li>
                </ul>
              ))}

              <h3 className="cv-header">Arbetserfarenhet</h3>

              {CvData.work.map((object) => (
                <>
                  <ul className="cv-work-list cv-list">
                    <li>{object.company}</li>
                    <li>{object.location}</li>
                    <li>{object.duration}</li>
                  </ul>
                  <p>{object.description}</p>
                </>
              ))}
            </div>
            <aside className="article-left">
              <img
                className="cv-portrait"
                src={Portrait2}
                alt="Ett porträtt av Theodor Hägg"
              />
              <address>
                <ul className="cv-contact-list">
                  <li>
                    <a href="mailto:theodor.hagg@outlook.com">
                      <i className="fa-solid fa-envelope"></i>
                      theodor.hagg@outlook.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/etheoo/">
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/Sundsvall/data=!4m2!3m1!1s0x4664674c9dc6761f:0x683f9bac9f166120">
                      <i className="fa-solid fa-location-dot"></i> Sundsvall,
                      Sverige
                    </a>
                  </li>
                </ul>
              </address>
              <h3 className="cv-header">Språk</h3>
              <ul>
                <li>Svenska - Flytande</li>
                <li>Engelska - Flytande</li>
              </ul>
              <h3 className="cv-header">Övrigt</h3>
              <ul>
                <li>B-körkort</li>
              </ul>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
}

export default CvSection;
