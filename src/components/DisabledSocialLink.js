"use client";

export default function DisabledSocialLink({
  href,
  ariaLabel,
  className,
  children,
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      aria-disabled="true"
      className={className}
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </a>
  );
}
