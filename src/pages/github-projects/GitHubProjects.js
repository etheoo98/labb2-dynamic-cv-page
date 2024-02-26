import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import GithubAPICall from "./GithubAPICall";
import "../../components/shared/style/Global.css";
import "./GithubProjects.css";
import ScrollToTopBtn from "../../components/ScrollToTopBtn";

function GithubProjects() {
  return (
    <>
      <Header />
      <main id="main" aria-label="Main Content">
        <div className="section-container">
          <section className="section-content repository-content">
            <GithubAPICall />
          </section>
        </div>
        <ScrollToTopBtn />
      </main>
      <Footer />
    </>
  );
}

export default GithubProjects;
