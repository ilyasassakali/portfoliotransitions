import React from "react";
import "../styles/Home.css"
import imageilyas from "../images/ilyasassakali.jpg"
import { motion } from "framer-motion";


function Home() {
   


    return ( 
    
        <div className="mainContainer">
            <motion.div    
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            >
            <img src={imageilyas} alt="" />
            </motion.div>


            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.8,
                delay: 1.3,
                ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                Ilyas Assakali
            </motion.h1>


            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.8,
                delay: 1.3,
                ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                I'm a Full Stack Developer
            </motion.p>

            <div className="social-media">
        <motion.ul>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <a href="https://www.linkedin.com/in/ilyas-assakali-69396a143/">
              <i className="fab fa-linkedin"></i>
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.7,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <a href="https://github.com/ilyasassakali">
              <i className="fab fa-github"></i>
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.9,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <a href="mailto:ilyas.assakali@hotmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </motion.li>
        </motion.ul>
      </div>
        </div> 
   
    );
}

export default Home;