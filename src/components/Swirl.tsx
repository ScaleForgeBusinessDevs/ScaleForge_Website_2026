interface SwirlProps {
  className?: string;
  variant?: 1 | 2 | 3;
}

/** Abstract grayscale "liquid chrome" ribbon used as a recurring graphic motif. */
export default function Swirl({ className = "", variant = 1 }: SwirlProps) {
  const rotations = { 1: "-8deg", 2: "10deg", 3: "-2deg" };

  return (
    <div className={`relative overflow-hidden bg-[#0d0d10] ${className}`} aria-hidden>
      <div
        className="absolute inset-[-40%]"
        style={{
          transform: `rotate(${rotations[variant]})`,
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0) 0deg, rgba(255,255,255,0.5) 60deg, rgba(255,255,255,0.02) 130deg, rgba(255,255,255,0.35) 210deg, rgba(255,255,255,0) 280deg, rgba(255,255,255,0.4) 340deg, rgba(255,255,255,0) 360deg)",
          filter: "blur(38px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 100%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "5px 5px",
        }}
      />
    </div>
  );
}
