interface MarkProps {
  className?: string;
}

export function SlackMark({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="currentColor" aria-hidden>
      <rect x="14" y="2" width="6" height="16" rx="3" />
      <rect x="2" y="14" width="16" height="6" rx="3" />
      <rect x="16" y="18" width="6" height="16" rx="3" />
      <rect x="18" y="16" width="16" height="6" rx="3" />
    </svg>
  );
}

export function SpotifyMark({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
      <circle cx="18" cy="18" r="15.5" strokeWidth="2" />
      <path d="M10 15c5.5-1.6 11-1 16 1.6" />
      <path d="M11 20c4.6-1.3 9.2-.8 13.4 1.4" />
      <path d="M12 25c3.7-1 7.4-.7 10.6 1" />
    </svg>
  );
}

export function NotionMark({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <rect x="3" y="3" width="30" height="30" rx="7" />
      <path d="M12 11v14M12 11l12 14V11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DropboxMark({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="currentColor" aria-hidden>
      <path d="M10 4 1 10.5 10 17l9-6.5L10 4Z" />
      <path d="M26 4 17 10.5 26 17l9-6.5L26 4Z" />
      <path d="M1 23.5 10 30l9-6.5L10 17l-9 6.5Z" />
      <path d="M26 17l-9 6.5L26 30l9-6.5-9-6.5Z" />
      <path d="M10 31.6 18 26l8 5.6L18 36l-8-4.4Z" />
    </svg>
  );
}

export function FigmaMark({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="currentColor" aria-hidden>
      <path d="M14 2h6a5 5 0 0 1 0 10h-6V2Z" />
      <path d="M9 2h5v10H9a5 5 0 0 1 0-10Z" opacity="0.55" />
      <path d="M9 12h5v10H9a5 5 0 0 1 0-10Z" opacity="0.75" />
      <circle cx="19" cy="22" r="5" opacity="0.9" />
      <path d="M9 22a5 5 0 1 0 5 5v-5H9Z" opacity="0.4" />
    </svg>
  );
}

export function LinearMark({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="currentColor" aria-hidden>
      <rect x="2" y="15.5" width="32" height="2.6" rx="1.3" transform="rotate(-32 18 17)" />
      <rect x="6" y="9.5" width="24" height="2.6" rx="1.3" transform="rotate(-32 18 11)" opacity="0.65" />
      <rect x="6" y="21.5" width="24" height="2.6" rx="1.3" transform="rotate(-32 18 23)" opacity="0.65" />
    </svg>
  );
}

export const LOGOS = [
  { name: "Slack", Mark: SlackMark },
  { name: "Spotify", Mark: SpotifyMark },
  { name: "Notion", Mark: NotionMark },
  { name: "Dropbox", Mark: DropboxMark },
  { name: "Figma", Mark: FigmaMark },
  { name: "Linear", Mark: LinearMark },
];
