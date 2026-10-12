import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Ryan Alvino — Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind CSS",
};

// ✅ Biar pas di HP / iPhone notch tampilnya rapih + theme color
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0D" },
    { media: "(prefers-color-scheme: light)", color: "#0B0B0D" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ✅ safe-area top buat notch; ga ngubah desain */}
      <body className="bg-[var(--bg)] pt-[env(safe-area-inset-top)] text-[var(--text)] antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
