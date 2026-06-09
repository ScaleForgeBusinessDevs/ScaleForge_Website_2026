"use client";

import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export default function NeatBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gradient = new NeatGradient({
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
      resolution: 0.8,
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

    return () => gradient.destroy();
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden style={{ width: "100%", height: "100%" }} />;
}
