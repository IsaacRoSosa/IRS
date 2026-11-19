import { Analytics } from "@vercel/analytics/next";
import "@fontsource-variable/sora";
import "@fontsource/audiowide";
import "./globals.css";

const siteUrl = "https://isaacrs-portafolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Isaac Rojas — Software Engineer",
  description:
    "Portfolio of Isaac Rojas, a software engineer building full-stack web apps and native iOS apps.",
  icons: { icon: "/IRS.png" },
  openGraph: {
    title: "Isaac Rojas — Software Engineer",
    description: "Full-stack web and iOS projects, experience and hackathons.",
    url: siteUrl,
    siteName: "Isaac Rojas",
    images: ["/IRS-Logo.png"],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#050719",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. "one sec", Grammarly) add attributes
    // to <html>/<body> before React loads. This only silences that one level, not the whole app.
    <html lang="en" suppressHydrationWarning>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
