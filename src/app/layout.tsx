import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Adam Khomsi - Full Stack Developer",
  description:
    "Full Stack Developer. Creator of Rehostly, JazzHunt, TruthPulse, and DiffRead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
