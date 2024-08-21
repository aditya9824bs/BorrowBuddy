import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <footer style={{ position: "fixed", bottom: "0", width: "100vw" }}>
      <div className="container">
        <p>&copy; 2024 BorrowBuddy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
