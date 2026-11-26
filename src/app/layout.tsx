import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import "./globals.css";

// Figtree: free geometric sans closest to GT Walsheim, the typeface used on the reference site.
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: {
    default: "Mirabilia | Early Learning Education Centre and Kindergarten",
    template: "%s | Mirabilia",
  },
  description:
    "Get in touch and book a tour with one of Perth's most trusted childcare centres, where innovative education meets a caring, homelike environment.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={figtree.variable}>
      <body>
        <a href="#main" className="sr-only z-[60] rounded-full bg-plum px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
