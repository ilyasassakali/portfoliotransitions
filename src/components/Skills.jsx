import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import transition from "../transition";
import "../styles/Skills.css";
import skillsData from "../services/skillsData.json";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function Skills() {
  const [animationReady, setAnimationReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationReady(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []); // Runs once on component mount

  return (
    <motion.div
      className="skills-container"
      variants={containerVariants}
      initial="hidden"
      animate={animationReady ? "visible" : "hidden"}
    >
      {skillsData.skills.map((section, index) => (
        <motion.div
          key={index}
          className="skills-section"
          variants={itemVariants}
        >
          <h2>{section.title}</h2>
          <motion.div className="skills-items" variants={itemVariants}>
            {section.items.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                className="skill-item"
                variants={itemVariants}
              >
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default transition(Skills);

