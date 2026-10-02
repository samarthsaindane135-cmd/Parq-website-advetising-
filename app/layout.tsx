import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PARQ Services Private Limited | Smarter Parking. Better Cities.",
  description:
    "PARQ Services Private Limited provides smart parking solutions that help parking authorities manage, monitor and optimize parking operations.",
  keywords: [
    "PARQ",
    "Smart Parking",
    "Parking Management",
    "IoT Parking",
    "Parking Authorities",
    "Smart Cities",
    "Real-time Monitoring",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
