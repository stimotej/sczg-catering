import type { Metadata } from "next";
import { Abril_Fatface, Lora, Montserrat } from "next/font/google";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import Header from "@/modules/layout/header";
import Footer from "@/modules/layout/footer";

const abrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",
  weight: "400",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ugostiteljstvo & Catering",
    default: "Ugostiteljstvo & Catering",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${abrilFatface.variable} ${lora.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
