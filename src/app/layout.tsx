import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calradia Online - Play Campaign Together",
  description: "Play Mount & Blade II: Bannerlord campaign with friends. Online multiplayer mod for 2-4 players. Free download.",
  keywords: ["bannerlord", "coop", "multiplayer", "mod", "mount and blade", "online", "campaign"],
  openGraph: {
    title: "Calradia Online",
    description: "Play Bannerlord campaign with friends. Free multiplayer mod.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
