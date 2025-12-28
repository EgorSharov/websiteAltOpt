import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ModalProvider } from "@/components/providers/ModalProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Logistics & Distribution",
  description: "3PL Logistics and Wholesale Distribution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased bg-surface text-primary flex min-h-screen flex-col`}
      >
        <ModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
