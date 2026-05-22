# Planto

Planto is a premium, high-end botanical store landing page designed to showcase and sell hand-curated indoor plants. The application features a sleek dark botanical theme, smooth micro-animations, glassmorphic UI components, and complete responsiveness.

## Core Features

- Modern Botanical Aesthetics: Designed with a deep, curated green and dark color palette, smooth gradients, and immersive typography.
- Glassmorphism Design System: High-end translucent cards, sidebars, and navigation elements that seamlessly blend into the botanical background.
- Advanced Animations: Viewport-triggered fade-ins, spring-based hover translations, and interactive rotations powered by Framer Motion.
- Interactive Spotlight Showcase: A dynamic, animated slideshow showcasing featured high-oxygen plants with custom entry and exit transitions.
- Responsive Navigation: A clean desktop layout that transforms into an immersive glassmorphic drawer on mobile devices.
- High-Performance Rendering: Optimized assets, custom SVG vector frames, and next/image integration for efficient loading times.

## Technology Stack

- Framework: Next.js (App Router)
- Core Logic: React and TypeScript
- Animations: Framer Motion
- Icons: Lucide React
- Styling: Tailwind CSS (v4) with PostCSS
- Package Manager: Bun / NPM

## Project Structure

- app/: Contains the Next.js App Router files.
  - components/: Modular React components.
    - Navbar.tsx: Desktop and mobile drawer navigation with animated transitions.
    - Hero.tsx: Immersive hero section featuring hot-selling plants and introductory statistics.
    - Card.tsx: Reusable high-end glassmorphic card component.
    - ProductCard.tsx / ProductGrid.tsx: Grid showcasing top-selling products with spring hover transitions.
    - Spotlight.tsx: Responsive high-oxygen showcase slider with independent image and text animations.
    - Reviews.tsx: Customer reviews and star ratings using custom SVG components.
    - Footer.tsx: Sophisticated footer containing footer links, newsletter sign-ups, and brand info.
  - lib/: Utility files and static asset reference mappings.
  - globals.css: Global styles, custom tailwind configurations, and background setups.
- public/: Project assets including plant vectors, custom SVGs, logos, and illustration assets.

## Getting Started

### Prerequisites

Ensure you have Node.js and Bun (or another package manager like NPM, Yarn, or PNPM) installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JeetDas5/planto.git
   cd planto
   ```

2. Install the dependencies:
   ```bash
   bun install
   ```
   Or using NPM:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local server:
```bash
bun dev
```
Or using NPM:
```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the application.

### Building for Production

To create a production-optimized build of the project, run:
```bash
bun run build
```
Or using NPM:
```bash
npm run build
```

To start the production server after building:
```bash
bun start
```
Or using NPM:
```bash
npm run start
```
---

Built with ❤️ by Jeet Das for Lemon Studios