import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "KaroFlow | The complete payment platform for schools in Africa",
  description: "KaroFlow offers the most complete and innovative payment platform for schools allowing them to streamline fees collection, automate invoicing and reconciliation, and allows schools to offer flexible payment options to their students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
