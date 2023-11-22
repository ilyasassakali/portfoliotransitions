import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import transition from "../transition";
import "../styles/About.css";
import codedesign from "../images/codedesign.json";
import Lottie from 'lottie-react';
import { TypeAnimation } from 'react-type-animation';
import GraphemeSplitter from 'grapheme-splitter';
 

function About() {
    const splitter = new GraphemeSplitter();
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            controls.start({
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.8,
                    ease: [0.2, 0.71, 0.2, 1.01],
                },
            });
        }, 2000);

        return () => clearTimeout(timer);
    }, [controls]);

    return (
        <div className="firstAbout">
            <div className="textabout">
                <motion.h2
                    initial={{ opacity: 0, y: -200, scale: 100 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 1,                    
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <TypeAnimation
                        splitter={(str) => splitter.splitGraphemes(str)}
                        sequence={[
                            'Hello 🇬🇧',
                            2000,
                            'Bonjour 🇫🇷',
                            2000,
                            'Hallo 🇳🇱',
                            2000
                        ]}
                        repeat={Infinity}
                    />
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, x: -150 }}
                    animate={controls}
                    className="animated-text"
                >
                    Harmonizing <span className="coloredWord">Code</span>,<span className="coloredWord"> Design</span> and <span className="coloredWord">Functionality</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -150 }}
                    animate={controls}
                    className="animated-text"
                >
                    <TypeAnimation
                        sequence={[`As an IT enthusiast, football fanatic, and fitness buff, I bring a dynamic blend of passions to my work. I thrive on creating sleek and functional digital experiences, aligning seamlessly with my love for clean code and intuitive designs. Much like a well-balanced workout regimen, I believe in finding harmony in every project. Whether it's in English, French, or Dutch, I ensure that my work reflects precision and creativity.`]}
                        speed={75}
                    />
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 150 }}
                animate={controls}
                className="lottie"
            >
                <Lottie animationData={codedesign} />
            </motion.div>
        </div>
    );
}

export default transition(About);