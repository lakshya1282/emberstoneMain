"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#", label: "HOME" },
  { href: "#", label: "THE ESSENCE" },
  { href: "#", label: "THE CRAFT" },
  { href: "#", label: "THE EXPERIENCE" },
];

type NavLinkStyle = CSSProperties & {
  "--i": number;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setNavHidden(currentScrollY > lastScrollY && currentScrollY > 200);
      setNavScrolled(currentScrollY > 100);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const getLinkStyle = (index: number): NavLinkStyle => ({
    "--i": index + 1,
  });

  return (
    <>
      <nav
        className={`navbar${navHidden ? " nav-hidden" : ""}${navScrolled ? " nav-scrolled" : ""}`}
      >
        <div className="nav-left">
          <a href="#" className="navbar-logo-link">
            <img
              src="/logo-nav.png"
              alt="Emberstone Logo"
              className="navbar-logo-img"
            />
          </a>
        </div>

        <div className="nav-right">
          <ul className="desktop-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link-item">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="nav-menu-btn"
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            MENU
          </button>
        </div>
      </nav>

      <div className={`slider-menu${menuOpen ? " active" : ""}`}>
        <button
          className="menu-close-btn"
          type="button"
          onClick={() => setMenuOpen(false)}
        >
          CLOSE
        </button>
        <div className="slider-menu-links">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="slider-nav-link"
              style={getLinkStyle(index)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
