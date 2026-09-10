import { socialConfig } from "@/config/socials";

export const socialLinks = [
  {
    label: "Facebook",
    href: socialConfig.facebook,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
        <path fill="currentColor" d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.4Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: socialConfig.instagram,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: socialConfig.tiktok,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
        <path fill="currentColor" d="M15.6 3c.3 2.2 1.6 3.6 3.9 3.8v3.1a8 8 0 0 1-3.9-1.1v5.7a5.5 5.5 0 1 1-4.8-5.4v3.2a2.4 2.4 0 1 0 1.7 2.3V3h3.1Z" />
      </svg>
    ),
  },
];
