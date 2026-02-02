import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a standard modern sans
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coretech Labs | Digital Engineering Studio",
  description: "Building scalable digital products with clean architecture and precision engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
