import "./Home.css";
import "../../components/shared/style/Global.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import CvSection from "./CvSection";
import ContactSection from "./ContactSection";
import StackSection from "./StackSection";
import { ModalEasterEgg, BackgroundEasterEgg } from "../../EasterEggs";
import ScrollToTopBtn from "../../components/ScrollToTopBtn";

function Home() {
  return (
    <>
      <Header isLandingPage={true} />

      <main id="main" aria-label="Main Content">
        <ModalEasterEgg />
        <BackgroundEasterEgg />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CvSection />
        <ContactSection />
        <StackSection />
        <ScrollToTopBtn/>
      </main>

      <Footer isLandingPage={true} />
    </>
  );
}

export default Home;
