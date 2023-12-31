// import { Roboto } from "next/font/google";
import Providers from "./providers/Providers";
import "./globals.css";
import { Footer } from "@/components";

// const roboto = Roboto({
//   weight: ["100", "300", "400", "500", "700", "900"],
//   subsets: ["latin"],
// });

export const metadata = {
  title: "JhotPot | Discover Delicious Recipes Using Your Fridge's Ingredients",
  description: "Discover Delicious Recipes Using Your Fridge's Ingredients",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" },
  themeColor: "#fff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`scroll-smooth bg-white text-navy transition-colors duration-500 dark:bg-navy dark:text-white`}
      >
        <Providers>
          <main className="hide-scrollbar h-[calc(100dvh-70px)] overflow-y-scroll">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
