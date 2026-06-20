"use client";

import dynamic from "next/dynamic";

export const ShaderAnimation = dynamic(
  () => import("./ShaderAnimation").then((m) => m.ShaderAnimation),
  { ssr: false }
);
