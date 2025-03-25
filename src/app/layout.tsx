import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sham Roy",
  description: "Sham roy's portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
