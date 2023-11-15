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
       <Link to="/" onClick={() => showNavigationBar()}><a href="/">Home</a></Link>
       <Link to="/about" onClick={() => showNavigationBar()}><a href="/">About</a></Link>
       <Link to="/skills" onClick={() => showNavigationBar()}><a href="/">Skills</a></Link>
       <Link to="/projects" onClick={() => showNavigationBar()}><a href="/">Projects</a></Link>

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
