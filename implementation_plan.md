# Implementation Plan: Migrate Emberstone Website to Next.js

The goal is to convert the existing vanilla website into a modern Next.js application using the App Router. This will provide a solid foundation for adding smooth animations and managing complex UI states more effectively.

## User Review Required

> [!IMPORTANT]
> The design will remain identical to the original vanilla site. I will use the existing CSS as a global stylesheet to ensure every pixel matches.
> Future animations should be added using GSAP and Framer Motion (if needed), as Next.js integrates well with these.

## Proposed Changes

### System & Dependencies
- Initialize Next.js project with TypeScript, ESLint, and App Router.
- Install core libraries: `gsap`, `@gsap/react`, `lenis`, `aos`, `split-type`.

### Asset Migration
- Move all images (`.jpeg`, `.png`, `.jpg`) and fonts (`.ttf`, `.otf`) from `old_site/` to the `public/` directory.

### UI Components
- **`src/app/globals.css`**: Migrate the 900+ lines of CSS from `style.css`.
- **`src/components/layout/Navbar.tsx`**: Implement the fixed navbar and the sliding overlay menu.
- **`src/components/sections/Hero.tsx`**: Port the hero section with its AOS and GSAP entrance animations.
- **`src/components/sections/Story.tsx`**: Port the "Our Belief" story section.
- **`src/components/sections/SecondaryShowcase.tsx`**: Port the complex ScrollTrigger-based showcase animation.
- **`src/components/common/SmoothScroll.tsx`**: A client component wrapper for Lenis smooth scrolling.

### Main Page
- **`src/app/page.tsx`**: Assemble the sections into a single-page layout matching the original `index.html`.

## Open Questions
- None at this time. The requirements are clear: "exact same design".

## Verification Plan

### Automated Tests
- Run `npm run dev` to check for compilation errors.
- Visual inspection via browser against the original design.

### Manual Verification
- Check all interactive elements:
  - Hamburger menu functionality.
  - Scroll-triggered animations (AOS and GSAP).
  - Smooth scrolling behavior via Lenis.
  - Responsiveness on mobile and desktop breakpoints.
