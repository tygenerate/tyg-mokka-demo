
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mokka Coffee & Kitchen | Kahve ve Lezzetin Buluşma Noktası",
  description:
    "Mokka Coffee & Kitchen — TYGenerate tarafından hazırlanmış modern kafe ve restoran demo web sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
