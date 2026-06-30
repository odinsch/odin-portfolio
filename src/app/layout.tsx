import type { Metadata } from "next";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://odin-portfolio-neon.vercel.app/"),
  title: "Odin Schwartz — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer building immersive, high-performance web experiences for global brands.",
  openGraph: {
    title: "Odin Schwartz — Senior Frontend Engineer",
    description:
      "Building immersive, high-performance web experiences for global brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
