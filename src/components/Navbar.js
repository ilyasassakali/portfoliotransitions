import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navBarRef = useRef();

  const showNavigationBar = () => {
    navBarRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h2>AI</h2>
      <nav ref={navBarRef}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Skills</a>
        <a href="/#">Projects</a>
        <a href="/#">Contact</a>

        <button className="nav-btn nav-close-btn" onClick={showNavigationBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavigationBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
