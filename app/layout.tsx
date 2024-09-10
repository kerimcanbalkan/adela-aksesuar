import type { Metadata } from "next";
import { Gurajada } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import "./globals.css";

const gurajada = Gurajada({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Adela Aksesuar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gurajada.className}`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
