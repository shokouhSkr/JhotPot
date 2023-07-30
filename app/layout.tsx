import { Inter } from "next/font/google";
import Providers from "../providers/Providers";
import "./globals.css";
import { Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JhotPot | Discover Delicious Recipes Using Your Fridge's Ingredients",
  description: "Discover Delicious Recipes Using Your Fridge's Ingredients",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} scroll-smooth bg-white text-navy transition-colors duration-500 dark:bg-navy dark:text-white`}
      >
        <Providers>
          <main className="min-h-[calc(100vh-50px)]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
