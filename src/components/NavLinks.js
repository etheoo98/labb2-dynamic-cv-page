function NavLinks() {

  function scrollToId(id) {
    const element = document.getElementById(id);

    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ul>
      <li>
        <button onClick={() => scrollToId("om-mig")}>Om mig</button>
      </li>
      <li>
        <button onClick={() => scrollToId("tidigare-projekt")}>Projekt</button>
      </li>
      <li>
        <button onClick={() => scrollToId("cv")}>CV</button>
      </li>
      <li>
        <button onClick={() => scrollToId("kontakt")}>Kontakt</button>
      </li>
    </ul>
  );
}

export default NavLinks;
