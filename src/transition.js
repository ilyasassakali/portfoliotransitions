import { motion } from "framer-motion";
import "./styles/transition.css";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="startscreen-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.2, 1, 0.4, 1.2] }}
      />

      <motion.div
        className="startscreen-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.2, 1, 0.4, 1.2] }}
      />

      <motion.div
        className="text-out"
        initial={{ y: 500 }}
        animate={{ y: -400 }}
        exit={{ y: -50 }}
        transition={{ duration: 2, ease: [0.2, 1, 0.4, 1.2] }}
      >
        AI
      </motion.div>
    </>
  );
};

export default transition;
