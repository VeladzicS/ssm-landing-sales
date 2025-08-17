import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { LazyMotion, domAnimation } from "framer-motion";
import Footer from "@/components/layout/footer";
import { currentSalesperson } from "@/lib/data";
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair_display",
  subsets: ["latin"],
  weight: ["700", "900"],
  preload: true,
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  preload: true,
  display: "swap",
});
const person = currentSalesperson;
export const metadata: Metadata = {
  title: `${person.fullName}-Showsight Magazine`,
  description: person.bio,
  keywords: ["sales", "advertising", "showsight"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} antialiased`}
      >
        <LazyMotion features={domAnimation}>
          <Header />
          {children}
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}
