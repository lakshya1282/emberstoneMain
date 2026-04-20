"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const IMAGES = [
  "/conclusion/c1.jpg",
  "/conclusion/c2.jpg",
  "/conclusion/c3.jpg",
  "/conclusion/c4.jpg",
  "/conclusion/c5.jpg",
  "/conclusion/c6.jpg",
];

export default function HorizontalCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2; // Since we double the images

    // Create infinite loop
    animationRef.current = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 30, // Base speed (slow)
      ease: "none",
      repeat: -1,
    });

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, { timeScale: 0.1, duration: 1, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, { timeScale: 1, duration: 1, ease: "power2.in" });
    }
  };

  return (
    <div 
      className="carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-track" ref={trackRef}>
        {/* Render twice for seamless loop */}
        {[...IMAGES, ...IMAGES].map((src, index) => (
          <div 
            key={index} 
            className={`carousel-item ${(index % 2 === 0) ? "pulse-expand" : "pulse-shrink"}`}
          >
            <img src={src} alt={`Whiskey Scene ${index + 1}`} className="carousel-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
