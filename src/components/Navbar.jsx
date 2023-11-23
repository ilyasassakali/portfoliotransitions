import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  const navBarRef = useRef();
  const location = useLocation();

  const showNavigationBar = () => {
    navBarRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h2>AI</h2>
      <nav ref={navBarRef}>
      <Link to="/" onClick={() => showNavigationBar()} className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" onClick={() => showNavigationBar()} className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link to="/skills" onClick={() => showNavigationBar()} className={location.pathname === '/skills' ? 'active' : ''}>
          Skills
        </Link>
        <Link to="/projects" onClick={() => showNavigationBar()} className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </Link>

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
