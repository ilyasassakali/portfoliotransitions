import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import transition from "../transition";
import "../styles/Projects.css";
import projectsData from "../services/projectsData.json";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

function Projects() {
  return (
    <div>
      {projectsData.projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={`projects-container ${inView ? "visible" : "hidden"}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="project-details">
        <h1>{project.title}</h1>
        <p>{project.bodyText}</p>
        <div className="buttons">
          {project.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="technologies">
          <h3>Technologies Used:</h3>
          <ul>
            {project.tags.map((tag, tagIndex) => (
              <li key={tagIndex}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
    </motion.div>
  );
}

export default transition(Projects);
