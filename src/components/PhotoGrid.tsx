import React from "react";
import "./PhotoGrid.css"
import img1 from "@/assets/image1.jpeg"; // Import images
import img2 from "@/assets/image2.jpeg"; // Add more images if needed
import img3 from "@/assets/image3.jpeg";
import img4 from "@/assets/image4.jpeg";
import img5 from "@/assets/image5.jpeg";
import img6 from "@/assets/image6.jpeg";
import img7 from "@/assets/image7.jpeg";
import img8 from "@/assets/image8.jpeg";
import img9 from "@/assets/image9.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
