import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleGetStartedClick = () => {
    navigate("/featuresPage"); // This path should match the route for FeaturesPage in your routing configuration
  };
  return (
    <section className="hero">
      <div>
        <motion.div data-scroll data-scroll-speed={0.5}>
          <motion.h2
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.85, 0, 0.15, 1],
            }}
          >
            Welcome to Borrow Buddy
          </motion.h2>
        </motion.div>
        <motion.div data-scroll data-scroll-speed={0.3}>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.85, 0, 0.15, 1],
            }}
          >
            Find Your essentials for Borrow or Purchase{" "}
          </motion.p>
        </motion.div>
        <motion.button
          animate={{
            scale: 1,
          }}
          initial={{
            scale: 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.85, 0, 0.15, 1],
            delay: 0.25,
          }}
          onClick={handleGetStartedClick}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
