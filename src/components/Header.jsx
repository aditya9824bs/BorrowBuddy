import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.nav
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      transition={{
        duration: 1,
        ease: [0.85, 0, 0.15, 1],
        delay: 0.5,
      }}
      className="navbar"
    >
      <div className="heading_div">
        <div className="logo">
          <img src="../src/assets/logo.png" alt="" />
        </div>
        <h1 className="navbar_heading">Borrow Buddy</h1>
      </div>

      <ul className="navbar_list">
        <li onClick={() => window.location.assign("/")}>Home</li>
        <li onClick={() => window.location.assign("/featuresPage")}>
          Features
        </li>
        <li onClick={() => window.location.assign("/login")}>Login</li>
        <li onClick={() => window.location.assign("/signup")}>Sign Up</li>
      </ul>
    </motion.nav>
  );
};

export default Header;
