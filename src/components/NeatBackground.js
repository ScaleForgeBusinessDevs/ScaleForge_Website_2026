"use client";

import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export default function NeatBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (prefersReducedMotion || isMobile) return;

    let gradient = null;
    let cancelled = false;

    function createGradient() {
      return new NeatGradient({
        ref: canvas,
        colors: [
          { color: "#010101", enabled: true },
          { color: "#8C8B8B", enabled: true },
          { color: "#303030", enabled: true },
          { color: "#161616", enabled: true },
          { color: "#535353", enabled: true },
        ],
        speed: 4,
        horizontalPressure: 3,
        verticalPressure: 4,
        waveFrequencyX: 10,
        waveFrequencyY: 0,
        waveAmplitude: 10,
        shadows: 8,
        highlights: 10,
        colorBrightness: 1,
        colorSaturation: 2,
        wireframe: false,
        colorBlending: 9,
        backgroundColor: "#000000ff",
        backgroundAlpha: 1,
        grainScale: 2,
        grainSparsity: 0,
        grainIntensity: 0,
        grainSpeed: 1,
        resolution: 0.5,
        yOffset: -500,
        yOffsetWaveMultiplier: 8.5,
        yOffsetColorMultiplier: 7.8,
        yOffsetFlowMultiplier: 9,
        flowDistortionA: 3.7,
        flowDistortionB: 3.3,
        flowScale: 2.9,
        flowEase: 0.13,
        flowEnabled: true,
        cameraRotationX: 0.007,
      });
    }

    const start = () => {
      if (!cancelled && !gradient) gradient = createGradient();
    };

    let idleId = -1;
    let timeoutId = -1;

    const cancelScheduled = () => {
      if (idleId !== -1) window.cancelIdleCallback(idleId);
      if (timeoutId !== -1) window.clearTimeout(timeoutId);
      idleId = -1;
      timeoutId = -1;
    };

    const schedule = (timeout) => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(start, { timeout });
      } else {
        timeoutId = window.setTimeout(start, Math.min(timeout, 200));
      }
    };

    // Defer WebGL init until the browser is idle so it doesn't compete with
    // hydration/paint during the critical loading window. The 4s ceiling
    // keeps it well clear of a desktop visitor's likely first click — if
    // one arrives sooner, reschedule for right after that click finishes
    // instead of letting the shader-compile work block its repaint (INP).
    schedule(4000);

    const onFirstInteraction = () => {
      cancelScheduled();
      schedule(0);
    };
    window.addEventListener("pointerdown", onFirstInteraction, {
      once: true,
      passive: true,
    });

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", onFirstInteraction);
      cancelScheduled();
      gradient?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
      style={{ width: "100%", height: "100%" }}
    />
  );
}
