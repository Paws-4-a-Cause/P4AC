import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: "#3264b6",
      color: "white",
      textAlign: "center",
      padding: "10px 0",
      width: "100%",
      position: "absolute",
      bottom: 0,
      left: 0,
    }}>
      <p>&copy; {new Date().getFullYear()} Paws 4 a cause. All rights reserved.</p>
      <p>
        Contact us at:{" "}
        <a
          href="mailto:contact@example.com"
          style={{ color: "#4da6ff", textDecoration: "none" }}
        >
          P4AC@email.com
        </a>
      </p>
    </footer>


  );
};

export default Footer;