"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectGallery({ images, projectTitle }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + images.length) % images.length,
      ),
    [images.length],
  );

  const next = useCallback(
    () =>
      setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((img, i) => (
          <figure
            key={i}
            className="group cursor-zoom-in overflow-hidden rounded-2xl border border-white/[0.07]"
            onClick={() => setLightboxIndex(i)}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt ?? `${projectTitle} screenshot ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-[#08090a]/0 opacity-0 transition-all duration-300 group-hover:bg-[#08090a]/40 group-hover:opacity-100">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                  <Maximize2 size={14} className="text-white" aria-hidden />
                </span>
              </div>
            </div>
            {img.caption && (
              <figcaption className="px-4 py-2.5 text-[12px] text-white/35">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08090a]/95 backdrop-blur-xl"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white/70 transition-colors hover:bg-white/[0.13] hover:text-white"
            aria-label="Close"
          >
            <X size={14} aria-hidden />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white/70 transition-colors hover:bg-white/[0.13] hover:text-white lg:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} aria-hidden />
            </button>
          )}

          {/* Image */}
          <div
            className="mx-16 flex max-h-[90vh] max-w-[90vw] flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- lightbox
                sizes to the intrinsic image, which next/image cannot express */}
            <img
              src={images[lightboxIndex].src}
              alt={
                images[lightboxIndex].alt ??
                `${projectTitle} screenshot ${lightboxIndex + 1}`
              }
              loading="lazy"
              decoding="async"
              className="max-h-[82vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            <div className="flex items-center gap-4">
              {images[lightboxIndex].caption && (
                <p className="text-[13px] text-white/50">
                  {images[lightboxIndex].caption}
                </p>
              )}
              <span className="text-[12px] text-white/25">
                {lightboxIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white/70 transition-colors hover:bg-white/[0.13] hover:text-white lg:right-8"
              aria-label="Next image"
            >
              <ChevronRight size={16} aria-hidden />
            </button>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-6 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === lightboxIndex ? "w-6 bg-white" : "w-1.5 bg-white/30"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
