"use client";

import { useState, useEffect } from "react";

const BG_IMAGES = [
  "/conclusion/c1.jpg",
  "/conclusion/c2.jpg",
  "/conclusion/c3.jpg",
  "/conclusion/c4.jpg",
  "/conclusion/c5.jpg",
  "/conclusion/c6.jpg",
];

/* eslint-disable @next/next/no-img-element */
export default function ConclusionSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="conclusion-section" data-aos="fade-up">
      {/* Background Slideshow Layer */}
      <div className="conclusion-bg-slideshow">
        {BG_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`slideshow-img-wrapper ${index === currentIndex ? "active" : ""}`}
          >
            <img 
              src={src} 
              alt="Slideshow" 
              className={`slideshow-img ${[2, 3, 5].includes(index) ? "position-bottom" : ""}`} 
            />
          </div>
        ))}
        {/* Darkening Overlay for legibility */}
        <div className="slideshow-overlay"></div>
      </div>

      <div className="conclusion-title-wrapper-bottom" data-aos="fade-up">
        <img src="/conclusion-title.png" alt="Conclusion Title" className="conclusion-title-img-bottom" />
      </div>
    </section>
  );
}
