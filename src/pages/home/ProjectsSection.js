import schoolImg1 from "../../img/ss/school-project-1.webp";
import schoolImg2 from "../../img/ss/school-project-2.webp";
import schoolImg3 from "../../img/ss/school-project-3.webp";
import bankImg1 from "../../img/ss/bank-project-1.webp";
import cinemaImg1 from "../../img/ss/cinema-project-1.webp";
import cinemaImg2 from "../../img/ss/cinema-project-2.webp";
import cinemaImg3 from "../../img/ss/cinema-project-3.webp";
import { useState } from "react";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return <div className="modal-container">{children}</div>;
};

function ProjectsSection() {
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isCinemaModalOpen, setIsCinemaModalOpen] = useState(false);

  const openSchoolModal = () => setIsSchoolModalOpen(true);
  const closeSchoolModal = () => setIsSchoolModalOpen(false);
  const openBankModal = () => setIsBankModalOpen(true);
  const closeBankModal = () => setIsBankModalOpen(false);
  const openCinemaModal = () => setIsCinemaModalOpen(true);
  const closeCinemaModal = () => setIsCinemaModalOpen(false);

  return (
    <div id="tidigare-projekt" className="section-container">
      <section className="section-content projects-content">
        <h2 className="section-header" aria-label="Tidigare projekt">
          Tidigare projekt
        </h2>
        <div className="projects-container">
          <div className="projects-item">
            <div className="icon-container">
              <i className="fa-solid fa-school"></i>
            </div>
            <h3>Skolledningssystem</h3>
            <p>
              Ett enklare skolledningssystem för betygsättning, tilldeling av
              kurser, registrering av nya elever och översikt kring intressant
              statistik.
            </p>
            <button className="project-btn" onClick={openSchoolModal}>
              Läs mer
            </button>
          </div>
          <div className="projects-item">
            <div className="icon-container">
              <i className="fa-solid fa-piggy-bank"></i>
            </div>
            <h3>Banksystem</h3>
            <p>
              Ett grupprojekt där målet var att utveckla ett banksystem för att
              tillåta överföringar av pengar mellan diverse aktörer. Jag hade
              rollen som arkitekt.
            </p>
            <button className="project-btn" onClick={openBankModal}>
              Läs mer
            </button>
          </div>
          <div className="projects-item">
            <div className="icon-container">
              <i className="fa-solid fa-film"></i>
            </div>
            <h3>Webbplats åt en biograf</h3>
            <p>
              En webbplats åt en fiktiv biograf med spännande funktionalitet som
              inloggningssystem, bokningssystem och Content Management System
              (CMS).
            </p>
            <button className="project-btn" onClick={openCinemaModal}>
              Läs mer
            </button>
          </div>
        </div>
      </section>
      <Modal isOpen={isSchoolModalOpen} onClose={closeSchoolModal}>
        <article
          className="school-system-modal modal-content"
          aria-hidden="true">
          <header>
            <h2 aria-label="Skolledningssystem">
              Skollednings<span className="highlight-text">system</span>
            </h2>
            <button onClick={closeSchoolModal}>
              <i className="modal-close-btn fa-solid fa-xmark"></i>
            </button>
          </header>
          <div className="main-article">
            <figure>
              <img
                src={schoolImg1}
                alt="Skrämdump av applikationens huvudmeny."
              />
              <figcaption>Bilden visar huvudmenyn.</figcaption>
            </figure>
            <p>
              I kursen Programmering av databaser och SQL, gick slutprojektet ut
              på att man skulle utveckla ett skolledningssystem. Detta system
              skulle bestå av en applikation som är kopplad till en SQL-databas
              som lagrar information som personal, elever, kurser m.m. I
              applikationen ska administratörer kunna se statistik bland den
              lagrade datan, samt kunna manipulera data utifrån kursmålen.
            </p>
            <p>
              Efter att ha övervägt vilken typ av databas jag ville använda mig
              av, beslöt jag att använda en SQLite-databas då jag ville enkelt
              kunna dela mitt projekt så att andra kan testa min applikation
              utan att behöva återskapa samma databasmodell.
            </p>
            <p>
              Användargränsnittet är byggt med&nbsp;
              <a href="https://spectreconsole.net/">Spectre Console</a>, vilket
              bidrog till att processen blev väldigt smidig. Användaren kan
              enkelt välja alternativ från menyn genom att navigera med
              piltangenterna och klicka på Enter för att bekräfta sitt val.
            </p>
            <figure>
              <img
                src={schoolImg2}
                alt="Skrämdump av en tabell i applikation"
              />
              <figcaption>Bilden visar aktiva kurser.</figcaption>
            </figure>
            <p>
              För att utföra CRUD-operationer mot databasen, använde jag Entity
              Framework. Detta efter att jag gjort en scaffold av databasen och
              lagrat tabellerna som objekt i applikationen.
            </p>
            <p>
              För att presentera hämtad data på ett snyggt sätt, mappar jag den
              till en DTO för att förbereda objektet för utskrift.
            </p>
            <figure>
              <img
                src={schoolImg3}
                alt="Skrämdump som visar alternativ för att lägga till en ny elev."
              />
              <figcaption>
                Bilden visar alternativ för att lägga till en ny elev.
              </figcaption>
            </figure>
            <p>
              Utöver att hämta data från databasen, går det att lägga till ny
              data i form av nya elever och lärare. Det går även att betygsätta
              elever när dem gått klart en kurs.
            </p>
          </div>
        </article>
      </Modal>

      <Modal isOpen={isBankModalOpen} onClose={closeBankModal}>
        <article className="bank-system-modal modal-content" aria-hidden="true">
          <header>
            <h2 aria-label="Banksystem">
              Bank<span className="highlight-text">system</span>
            </h2>
            <button onClick={closeBankModal}>
              <i className="modal-close-btn fa-solid fa-xmark"></i>
            </button>
          </header>
          <div className="main-article">
            <figure>
              <img
                src={bankImg1}
                alt="Skrämdump av applikationens huvudmeny."
              />
              <figcaption>
                Bilden visar ett diagram för designmönstret MVP.
              </figcaption>
            </figure>
            <p>
              Som sista uppgift i kursen Objektorienterad programmering med C#
              och .NET, skulle vi utföra ett grupprojekt över en kortare period.
              Projektet gick ut på att utveckla ett banksystem där man skulle
              kunna logga in på olika konton och göra överföringar till
              varrandra, med mera.
            </p>
            <p>
              Eftersom jag jobbat mycket med databaser tidigare, blev det
              väldigt enkelt att förstå hur man skulle kunna strukturera
              projektet och jobba utifrån en In-Memory-databas. Denna databas
              fick vara en klass med generiska samlingar som egenskaper. För att
              hämta data från denna databas kan man då härma hur
              CRUD-operationer med Entity Framework går till, bara att man gör
              det mot en generisk samling som till exempel en List.
            </p>
            <p>
              Då jag hade höga ambitioner inför denna uppgift, var min
              förhoppning att arbetet skulle bedrivas undan större hinder. Men
              sådan var inte fallet. Min grupp hade bristande kommunkiation
              vilket ledde till ett oavslutat arbete.
            </p>
            <p>
              Detta berodde delvis på att vi inte hade påbörjat kursen
              Projektledning med Agila metoder och förstått betydelsen av god
              kommunikation i dessa sammanhang. Det berodde även på att ingen i
              gruppen utfört ett grupprojekt inom programmering tidigare.
            </p>
            <p>
              I vilket fall var grupparbetet en intressant upplevelse, och en
              god läxa i att förstå kommunikationens betydelse inom grupper.
              Personligen blev jag glatt överskad av att min tes kring
              arkitekturen stämmde, även om jag önskat att vi avslutat arbetet
              med all funktionalitet.
            </p>
          </div>
        </article>
      </Modal>

      <Modal isOpen={isCinemaModalOpen} onClose={closeCinemaModal}>
        <article
          className="cinema-website-modal modal-content"
          aria-hidden="true">
          <header>
            <h2 aria-label="Webbplats åt en biograf">
              Webbplats åt<span className="highlight-text"> en biograf</span>
            </h2>
            <button onClick={closeCinemaModal}>
              <i className="modal-close-btn fa-solid fa-xmark"></i>
            </button>
          </header>
          <div className="main-article">
            <figure>
              <img
                src={cinemaImg1}
                alt="Skrämdump av applikationens huvudmeny."
              />
              <figcaption>
                Bilden visar startsidan som består av ett bildspel.
              </figcaption>
            </figure>
            <p>
              När jag studerade på Vuxenutbildning Sundsvall, läste jag den
              insiktsfulla kursen Webbserverprogrammering 2. Hela kursen gick ut
              på att utveckla en hemsida åt en biograf där deras kunder kan
              skapa konton och boka biljetter till diverse filmer.
              Administratörer kan även använda ett Content Management System för
              att moderera innehåll och användare.
            </p>
            <figure>
              <img
                src={cinemaImg2}
                alt="Skrämdump av applikationens huvudmeny."
              />
              <figcaption>
                Bilden visar filmer utifån ett sökresultat.
              </figcaption>
            </figure>
            <p>
              Innan jag påbörjade denna kurs var jag väldigt intresserad av
              Frontend-utveckling. Jag hade tidigare bara jobbat med statiska
              sidor, och när jag lärde mig att använda en databas för att bygga
              dynamiska hemsidor, tyckte jag att det var så pass roligt att jag
              bestämde mig för att byta inriktning till fullstack.
            </p>
            <figure>
              <img
                src={cinemaImg3}
                alt="Skrämdump av applikationens huvudmeny."
              />
              <figcaption>Bilden visar produktsidan för en film.</figcaption>
            </figure>
          </div>
        </article>
      </Modal>
    </div>
  );
}

export default ProjectsSection;
