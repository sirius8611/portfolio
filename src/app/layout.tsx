import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

// add theme to the layout
import { ThemeProvider } from "@/src/app/components/ThemeProvider"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hoang Hieu",
    template: "%s | Hoang Hieu"
  },
  description: "An interdisciplinary engineer currently pursuing BS degree at VinUniversity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-stone-50 dark:bg-black`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
        <div className="h-lvh mx-28 px-20 bg-white border-neutral-100 dark:bg-neutral-900 border dark:border-neutral-700/75 ">
            <Navbar />
            <div className=" ">{children}</div>
            <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
