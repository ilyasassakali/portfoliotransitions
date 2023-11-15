import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const navBarRef = useRef();

  const showNavigationBar = () => {
    navBarRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h2>AI</h2>
      <nav ref={navBarRef}>
       <Link to="/"><a href="/">Home</a></Link>
       <Link to="/about"><a href="/">About</a></Link>
       <Link to="/skills"><a href="/">Skills</a></Link>
       <Link to="/projects"><a href="/">Projects</a></Link>
       <Link to="/contact"><a href="/">Contact</a></Link>

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
