/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SecondaryShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=350%",
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(".secondary-logo", {
          rotation: 405,
          scale: 2,
          opacity: 0.4,
          duration: 2.4,
        }, 0)
        .to(".secondary-text-group", {
          opacity: 1,
          y: -20,
          duration: 1.5,
        }, 0.8)
        .to(".secondary-labels-container", {
          opacity: 1,
          y: -20,
          duration: 1,
        }, 1.8);

      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  return (
    <section id="secondary-showcase" className="secondary-showcase" ref={sectionRef}>
      <div className="secondary-content">
        <img src="/logo.png" alt="Emberstone Logo" className="secondary-logo" />
        
        <div className="secondary-text-group">
          <img src="/born-of-flame.png" alt="BORN OF FLAME" className="secondary-title-img" />
          <p className="secondary-narrative">
            Across Ireland&apos;s ancient hills, fire tempers oak while stone shelters time. 
            Within these quiet spaces, Emberstone takes shape &mdash; triple distilled 
            and patiently matured in carefully chosen casks.
          </p>
        </div>

        <div className="secondary-labels-container">
          <div className="secondary-label-item">
            <span>CRAFT</span>
            <span>IS SACRED</span>
          </div>
          <div className="label-divider"></div>
          <div className="secondary-label-item">
            <span>TIME IS THE</span>
            <span>TRUE ARTISAN</span>
          </div>
          <div className="label-divider"></div>
          <div className="secondary-label-item">
            <span>SHAPED BY THE</span>
            <span>ROCK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
