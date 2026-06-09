"use client";
import { useEffect } from "react";

export default function BiLoader() {
  useEffect(() => {
    if (document.getElementById("bi-css")) return;
    const link = document.createElement("link");
    link.id = "bi-css";
    link.rel = "stylesheet";
    link.href = "/bi/bootstrap-icons.css";
    document.head.appendChild(link);
  }, []);
  return null;
}
