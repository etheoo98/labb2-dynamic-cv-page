import NavLinks from "../NavLinks";
import "./Footer.css";
import { useState, useEffect } from "react";

function Footer({ isLandingPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer aria-label="Bottom Footer">
      <div className="footer-container">
        <div className="footer-content">
          {isLandingPage && (
            <div className="footer-item">
              <h2 className="footer-item-desktop-header">Meny</h2>
              <button
                className="toggle-mobile-footer-menu-btn"
                onClick={toggleMobileNav}
                aria-label="Toggle Navigation"
                aria-expanded="false"
                aria-controls="footer-nav">
                <span>Meny</span>
                <i className="footer-toggle-icon fa-solid fa-plus"></i>
              </button>

              <nav
                id="footer-nav"
                className={`footer-nav ${isOpen ? "show" : ""}`}
                aria-label="Navigation">
                <NavLinks></NavLinks>
              </nav>
            </div>
          )}
          <div className="socials-area footer-item">
            <h2>Följ mig!</h2>
            <ul aria-label="Social Media Links">
              <li>
                <a href="https://github.com/etheoo98" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/etheoo" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/etheoo" aria-label="X/Twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom-content">
          <span>© Theodor Hägg 2024</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
