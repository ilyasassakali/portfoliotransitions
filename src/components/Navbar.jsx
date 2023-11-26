import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const navBarRef = useRef();
  const location = useLocation();

  const showNavigationBar = () => {
    navBarRef.current.classList.toggle("responsive_nav");
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#ff006e", 
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <header>
      <motion.h2
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.9, color: "#ff006e" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >AI
      </motion.h2>

      <nav ref={navBarRef}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => showNavigationBar()}
      >
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
      </motion.div>

      <motion.div
        whileHover={linkVariants.hover}
        whileTap={linkVariants.tap}
        onClick={() => showNavigationBar()}
      >
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
      </motion.div>

      <motion.div
        whileHover={linkVariants.hover}
        whileTap={linkVariants.tap}
        onClick={() => showNavigationBar()}
      >
        <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
          Skills
        </Link>
      </motion.div>

      <motion.div
        whileHover={linkVariants.hover}
        whileTap={linkVariants.tap}
        onClick={() => showNavigationBar()}
      >
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </Link>
      </motion.div>

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
