"use client";

import { useEffect } from "react";
import AOS from "aos";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onFrame = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onFrame);
    gsap.ticker.lagSmoothing(0);

    AOS.init({
      duration: 1800, // Luxurious slow entrance
      easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Premium ease-out
      once: true,
      mirror: false,
    });

    // Global Subtle Parallax for Titles
    // Note: .hero-side-title is NOT included here — it has its own dedicated
    // parallax in ScrollEffects.tsx. Adding it here would double-stack the effect.
    const titleSelectors = [
      ".story-title-img",
      ".process-title-img",
      ".craft-title-img",
      ".pouring-title-wrapper",
      ".conclusion-title-wrapper-bottom",
      ".secondary-title-img"
    ];

    titleSelectors.forEach((selector) => {
      gsap.utils.toArray(selector).forEach((el: any) => {
        gsap.to(el, {
          y: -60, // Very subtle move up as requested
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    const refreshOnResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
      AOS.refresh();
    };

    window.addEventListener("resize", refreshOnResize);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", refreshOnResize);
      gsap.ticker.remove(onFrame);
      lenis.destroy();
    };
  }, []);

  return null;
}
