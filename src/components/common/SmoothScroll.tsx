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
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      mirror: false,
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
