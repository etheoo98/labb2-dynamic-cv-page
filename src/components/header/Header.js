import "./Header.css";
import logo from "../../img/svg/logo-white.svg";
import NavLinks from "../NavLinks";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header({ isLandingPage }) {
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
    <header aria-label="Top Header">
      <div className="header-top-container">
        <div className="header-top-content">
          <Link to="/" className="logo-area" aria-label="Home">
            <img src={logo} alt="etheoo logo" />
            <h1 aria-label="Portfolio">
              Portfol<span className="highlight-text">i/o</span>
            </h1>
          </Link>

          {isLandingPage && (
            <>
              <nav className="desktop-nav" aria-label="Navigation">
                <NavLinks></NavLinks>
              </nav>
              <button
                className="toggle-mobile-menu-btn"
                onClick={toggleMobileNav}
                aria-label="Toggle Navigation"
                aria-expanded="false"
                aria-controls="mobile-nav">
                <i className="hamburger-icon fa-solid fa-bars"></i>
              </button>
            </>
          )}
        </div>
      </div>

      <div className={`mobile-menu-container ${isOpen ? "show" : ""}`}>
        <div className="mobile-menu-content">
          <nav id="mobile-nav" className="mobile-nav" aria-label="Navigation">
            <NavLinks></NavLinks>
          </nav>

          <button
            className={`mobile-menu-close-btn ${isOpen ? "show" : ""}`}
            onClick={toggleMobileNav}
            aria-label="Collapse Navigation">
            <i className="fa-solid fa-xmark"></i>
            <span>Stäng</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
