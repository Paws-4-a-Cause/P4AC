// src/components/OrganizationsCarousel.tsx
import React from "react";
import Slider from "react-slick";

// Import slick-carousel css files (required for styling react-slick)
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const organizations = [
  {
    title: "Love The Voiceless",
    description: "",
  },
  {
    title: "Love Kuching Project",
    description: "",
  },
  {
    title: "MercyLight",
    description: "",
  },
];

const OrganizationsCarousel = () => {
  // react-slick settings object. Adjust as needed.
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // default: show 1 slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="carousel-container my-8">
      <Slider {...settings}>
        {organizations.map((org, index) => (
          // Each slide gets a padding to keep the cards spaced out.
          <div key={index} className="p-4">
            <Card className="border border-gray-300">
              <CardHeader>
                <CardTitle>{org.title}</CardTitle>
              </CardHeader>
              <div className="text-3xl text-green-500">Hello, Tailwind!</div>
              <CardContent>
                <p>{org.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OrganizationsCarousel;
