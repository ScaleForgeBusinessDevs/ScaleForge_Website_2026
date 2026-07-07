"use client";

import type { ReactNode, MouseEvent } from "react";

export default function DisabledSocialLink({
  href,
  ariaLabel,
  className,
  children,
}: {
  href: string;
  ariaLabel: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      aria-disabled="true"
      className={className}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
    >
      {children}
    </a>
  );
}