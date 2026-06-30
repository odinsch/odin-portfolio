import type { Metadata } from "next";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Odin Schwartz — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer building immersive, high-performance web experiences for global brands.",
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
