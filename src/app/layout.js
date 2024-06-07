import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Isaac Rojas",
  description: "My portafolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
      <link rel="icon" href="IRS.png" />
    </html>
  );
}
