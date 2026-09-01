"use client";

import dynamic from "next/dynamic";

// WebGL canvas — must be client-only, no SSR
const AnimatedGradient = dynamic(() => import("./AnimatedGradient"), {
  ssr: false,
});

/**
 * Renders the full-page animated gradient as a fixed background.
 * Import this only in the homepage; it stays mounted for the whole scroll.
 */
export default function HomeBackground() {
  return (
    <AnimatedGradient
      config={{
        preset: "custom",
        color1: "#08080a",
        color2: "#1a1060",
        color3: "#0a0a0f",
        rotation: -30,
        proportion: 28,
        scale: 0.35,
        speed: 18,
        distortion: 3,
        swirl: 55,
        swirlIterations: 8,
        softness: 85,
        offset: -120,
        shape: "Checks",
        shapeSize: 35,
      }}
      style={{ position: "fixed", zIndex: 0 }}
    />
  );
}
