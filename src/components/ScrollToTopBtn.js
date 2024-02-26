import { useEffect } from "react";

function ScrollToTopBtn() {
  useEffect(() => {
    window.onscroll = function () {
      let scrollButton = document.querySelector(".scroll-to-top-btn");
      let header = document.querySelector(".header-top-container");

      if (header && window.scrollY > header.offsetHeight) {
        scrollButton.classList.add("show");
      } else {
        scrollButton.classList.remove("show");
      }
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      class="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll to top button">
      <i class="fa-solid fa-angle-up"></i>
    </button>
  );
}

export default ScrollToTopBtn;
