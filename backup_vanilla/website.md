# Emberstone Website Analysis

This document provides a detailed overview of the sections, elements, and animations implemented in the Emberstone Premium Whiskey website.

## 1. Project Structure & Core Technologies
- **Structure**: Semantic HTML5 with a mobile-first responsive approach.
- **Styling**: Modern Vanilla CSS using HSL colors, variable-based design tokens, and glassmorphism.
- **Animation Libraries**:
    - **GSAP (GreenSock)**: Orchestrates complex scroll-based timelines and parallax effects.
    - **ScrollTrigger**: Syncs animations with the viewport position.
    - **SplitType**: Enables precise character-level text animations.
    - **AOS (Animate On Scroll)**: Handles standard entry transitions for content blocks.
    - **Lenis**: Ensures a buttery-smooth, cinematic scrolling experience across all devices.

---

## 2. Website Sections & Elements

### A. Navigation System
- **Desktop Navbar (`.navbar`)**:
    - `Fixed` positioning for persistent access.
    - **Left Container (`.nav-left`)**: Nav links ("Our Story", "Collection") with hover transitions.
    - **Center Container (`.nav-center`)**: Premium "EMBERSTONE" brand mark (Playfair Display).
    - **Right Container (`.nav-right`)**: Nav links ("The Craft", "Contact").
- **Mobile Menu Elements**:
    - **Hamburger Button (`#hamburger`)**: 3-line span elements that mutate into an 'X'.
    - **Mobile Menu Overlay (`#mobile-menu`)**: Full-screen dark container.
    - **Interactive Links (`.mobile-nav-link`)**: 4 links with staggered animation delays.

### B. Hero Section (`#hero`)
- **Background Elements**: 
    - **Dynamic Spotlight (`.hero-bg`)**: A high-intensity `conic-gradient` simulating a professional studio photoshoot lighting beam.
    - **Cinematic Texture (`.grain-overlay`)**: A fractal noise SVG filter that adds high-end film grain.
- **Content Elements**:
    - **Text Stack (`.hero-text`)**:
        - `eyebrow`: Luxury-tracked sub-header.
        - `headline`: Dramatic large-scale serif typography using `Playfair Display`.
    - **Hero Asset**:
        - `hero-bottle`: A high-fidelity whiskey bottle image (using `<picture>` for mobile responsiveness).
        - **Shadows**: Double `drop-shadow` for depth and spotlight projection.

### C. Our Belief Section (`#story`)
- **Content Elements**: 
    - `section-title`: Large-scale centered header ("our belief").
    - `section-body`: A comprehensive narrative block using `Inter` for optimal readability.
- **Structural Elements**: Pure black canvas (`#0a0a0a`) with significant padding for an editorial feel.

### D. Visual Showcase (`#visual-showcase`)
- **Visual Elements**:
    - **Base Image (`.showcase-base`)**: Atmospheric background showing the whiskey experience (`mm.png`).
    - **Overlay Asset (`.showcase-overlay`)**: A floating detail shot (`cc.png`) that creates a parallax-like 3D effect.
- **Typography Elements**:
    - **Text Layer (`.showcase-text-wrapper`)**: Contains the primary tagline ("FORGED IN FIRE") and subtitle ("Grounded in stone").
    - **Description (`.showcase-description`)**: Elegant footer text with wide letter spacing.

### E. Secondary Showcase (`#secondary-showcase`)
- **Structural Elements**:
    - **Fixed Canvas**: A section with `background-attachment: fixed` for a subtle parallax scroll against the background (`Whisk_...png`).
    - **Watermark (`.secondary-logo`)**: A massive, soft-light version of the logo (`logo.png`).
    - **Narrative Overlay (`.secondary-narrative`)**: Impactful storytelling text centered on the screen.
- **Interactive Component**:
    - **Reveal Window (`.reveal-image-container`)**: A container that masks the lifestyle image (`Emberstone_16x9-01.jpg`) and expands dynamically.

---

## 3. Sophisticated Animations & Interactions

### 1. Atmosphere & Presence
- **Spotlight Beam**: CSS `@keyframes pulseBeam` slowly fluctuates the background light's intensity and blur (50px to 75px), giving the site a pulse.
- **Film Grain**: A persistent mix-blend-mode overlay that grounds the digital design in a physical, cinematic texture.

### 2. Scroll-Driven Physics
- **Bottle Parallax**: GSAP `ScrollTrigger` synchronizes the hero bottle's rotation and scale with the user's scroll depth. On desktop, it rotates an additional 8 degrees and scales to 1.12x.
- **Smooth Navigation**: `Lenis` intercepts native scrolling to provide a high-frequency, momentum-based feel.

### 3. Typography & Reveal Effects
- **Character-Level Reveal**: Using `SplitType`, the "Our Belief" text performs a "light traversal" effect. Characters start dull and brighten to pure white as the scroll progress passes them.
- **Three-Act Showcase**:
    - **Act 1**: The watermark logo spins 60 degrees while the brand narrative fades in.
    - **Act 2**: The narrative clears, and a small rectangular window appears in the center.
    - **Act 3**: The window expands to cover the entire viewport, transitioning the user into the lifestyle imagery.

### 4. Interactive Details
- **Mobile Transitions**: Staggered Y-axis translation and opacity fades for mobile links using CSS custom properties (`--i`).
- **Hamburger Morph**: Smooth CSS transitions for the spans to create the 'X' closing icon.

