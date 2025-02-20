// src/pages/AboutPage.tsx
import React from "react";
import PhotoGrid from "@/components/PhotoGrid";

const AboutPage = () => {
  return (
    <div id="about" style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        About Page
      </h1>
      <PhotoGrid />
    </div>
  );
};

export default AboutPage;