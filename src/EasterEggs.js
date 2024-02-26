import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ModalEasterEgg() {
  useEffect(() => {
    const easterEggModal = document.getElementById("easter-egg-modal");
    easterEggModal.style.display = "none";

    let inputs = "";

    function onUserInput(event) {
      inputs += event.key.toLowerCase();

      if (inputs.endsWith("1337")) {
        handleEasterEgg();
      }
    }

    function handleEasterEgg() {
      easterEggModal.style.display = "flex";
    }

    document.addEventListener("keydown", onUserInput);
  }, []);

  function closeEasterEggModal() {
    let easterEggModal = document.getElementById("easter-egg-modal");
    easterEggModal.style.display = "none";
  }

  return (
    <div id="easter-egg-modal" className="modal-container">
      <article className="modal-content" aria-hidden="true">
        <header>
          <h2 aria-label="Påskägg hittat!">
            Påskägg<span className="highlight-text"> hittat!</span>
          </h2>
          <button id="easter-egg-close-btn" onClick={closeEasterEggModal}>
            <i className="modal-close-btn fa-solid fa-xmark"></i>
          </button>
        </header>
        <div className="main-article">
          <p>
            Det var en ko och det var poängen. <br />
            <Link to="/github-projects">Här</Link> hittar du mina Github
            projekt.
          </p>
          <p></p>
        </div>
      </article>
    </div>
  );
}

function BackgroundEasterEgg() {
  useEffect(() => {
    let count = 0;
    const paragraphs = document.querySelectorAll("p");

    // Loop through each <p> element and add event listener
    paragraphs.forEach((paragraph) => {
      paragraph.addEventListener("click", onParagraphClick);
    });

    function onParagraphClick() {
      count++;

      if (count === 10) {
        handleEasterEgg();
      }
    }

    function handleEasterEgg() {
      document.documentElement.style.setProperty("--primary-accent", "#E01B24");
    }
  }, []);
}

export { ModalEasterEgg, BackgroundEasterEgg };
