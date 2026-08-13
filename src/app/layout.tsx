import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { person } from "@/lib/site-config";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Geometric grotesque — the closest available match to her banner lettering.
const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Chisom Nwankire builds LinkedIn presences that drive authority, trust, and revenue for brands, CEOs, and entrepreneurs. Brand management, ghostwriting, and lead generation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://chisomnwankire.com"), // ⚠ update to the real domain
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s — ${person.name}`,
  },
  description,
  keywords: [
    "LinkedIn brand strategist",
    "LinkedIn ghostwriter",
    "personal branding",
    "social media manager",
    "LinkedIn lead generation",
  ],
  authors: [{ name: person.name }],
  openGraph: {
    title: `${person.name} — ${person.role}`,
    description,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // Single committed light theme, white + magenta — see brand.md.
      className={`${sans.variable} ${mono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
