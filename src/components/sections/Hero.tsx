/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.to(".hero-description", {
        opacity: 1,
        duration: 2,
        delay: 0.8,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="hero" ref={sectionRef}>
      <div className="hero-bg">
        <div className="grain-overlay" />
        <img
          src="/new heri'.jpeg"
          alt="Emberstone Whiskey"
          className="hero-main-composite"
        />
      </div>

      <div className="hero-content">
        <div
          className="hero-side-wrapper left"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2 className="hero-side-title">FORGED IN FIRE</h2>
        </div>

        <div className="hero-main-asset-dummy" />

        <div
          className="hero-side-wrapper right"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="hero-side-title">GROUNDED IN STONE</h2>
        </div>

        <div className="hero-description">
          <p>
            BORN FROM THE INTENSE HEAT OF THE <br /> FORGE AND TEMPERED BY THE
            ANCIENT <br /> SILENCE OF STONE.
          </p>
        </div>
      </div>
    </section>
  );
}
