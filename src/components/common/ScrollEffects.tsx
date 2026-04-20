"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ScrollEffects() {
  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      // Set initial hidden state for images (can use filter blur safely)
      gsap.set(
        [
          ".process-title-img",
          ".story-title-img",
          ".craft-title-img",
        ],
        {
          autoAlpha: 0,
          filter: "blur(14px)",
          willChange: "transform, opacity, filter",
        }
      );

      // Set initial hidden state for WRAPPERS — NO filter because children
      // have their own CSS filter (brightness/invert) that must be preserved.
      gsap.set(
        [
          ".pouring-title-wrapper",
          ".conclusion-title-wrapper-bottom",
        ],
        {
          autoAlpha: 0,
          willChange: "transform, opacity",
        }
      );

      gsap.set([".bottle-img", ".craft-spec-block", ".pouring-spec-box"], {
        autoAlpha: 0,
        willChange: "transform, opacity, filter",
      });

      gsap.fromTo(
        ".hero-main-composite",
        { scale: 1.08, yPercent: -2 },
        {
          scale: 1,
          yPercent: 0,
          duration: 2.4,
          ease: "power3.out",
        }
      );



      gsap.to(".hero-side-wrapper.left", {
        xPercent: -6,
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      gsap.to(".hero-side-wrapper.right", {
        xPercent: 6,
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      const revealTitle = (
        selector: string,
        trigger: string,
        options: gsap.TweenVars = {}
      ) => {
        gsap.fromTo(
          selector,
          {
            autoAlpha: 0,
            y: options.y ?? 54,
            x: options.x ?? 0,
            scale: options.scale ?? 0.96,
            filter: "blur(14px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: options.duration ?? 1.35,
            ease: "power3.out",
            scrollTrigger: {
              trigger,
              start: options.start ?? "top 72%",
              toggleActions: "play none none reverse",
            },
          }
        );
      };

      // revealWrapper: same as revealTitle but NO filter — used for wrapper elements
      // whose children have their own CSS filter that must not be overridden.
      const revealWrapper = (
        selector: string,
        trigger: string,
        options: gsap.TweenVars = {}
      ) => {
        gsap.fromTo(
          selector,
          {
            autoAlpha: 0,
            y: options.y ?? 54,
            x: options.x ?? 0,
            scale: options.scale ?? 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: options.duration ?? 1.35,
            ease: "power3.out",
            scrollTrigger: {
              trigger,
              start: options.start ?? "top 72%",
              toggleActions: "play none none reverse",
            },
          }
        );
      };

      revealTitle(".process-title-img", "#process", { x: -80 });
      revealTitle(".story-title-img", "#story", { x: -90, start: "top 68%" });
      revealTitle(".craft-title-img", "#craft-showcase", { y: 90 });
      revealWrapper(".pouring-title-wrapper", ".pouring-section", { x: -70 });
      revealWrapper(".conclusion-title-wrapper-bottom", ".conclusion-section", { y: 100 });

      gsap.fromTo(
        ".process-description",
        { autoAlpha: 0, y: 36, filter: "blur(8px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.15,
          delay: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#process",
            start: "top 68%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".bottle-img",
        { autoAlpha: 0, y: 80, scale: 0.92, filter: "blur(16px)" },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#story",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".spec-row",
        { autoAlpha: 0, x: 70 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#story",
            start: "top 62%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".craft-spec-block",
        { autoAlpha: 0, x: 80, filter: "blur(10px)" },
        {
          autoAlpha: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#craft-showcase",
            start: "top 62%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".pouring-spec-box",
        { autoAlpha: 0, y: 48, filter: "blur(8px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pouring-section",
            start: "top 62%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".story-title-img", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: "#story",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      gsap.to(".craft-title-img", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: "#craft-showcase",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.to(".pouring-title-wrapper", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: ".pouring-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".slideshow-img-wrapper.active .slideshow-img", {
        scale: 1.08,
        duration: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      ScrollTrigger.refresh();
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
}