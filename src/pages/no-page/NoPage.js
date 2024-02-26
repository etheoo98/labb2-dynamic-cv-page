import "./NoPage.css";
import "../../components/shared/style/Global.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <Header includeNav={false} />
      <main id="main" aria-label="Main Content">
        <div className="error-container">
          <h2>
            404
            <br />
            <span> Sidan finns inte</span>
          </h2>
          <p>Adressen du efterfrågade finns inte!</p>
          <p>
            Klicka{" "}
            <Link className="link" to="/">
              här
            </Link>{" "}
            för att återgå till startsidan
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NoPage;
