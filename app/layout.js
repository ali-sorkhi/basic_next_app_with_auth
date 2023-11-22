import "./globals.css";
import localFont from "next/font/local";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/footer";

import { Noto_Naskh_Arabic } from "next/font/google";
import { NextAuthProvider } from "./providers";

const myFont = localFont({
  src: "../public/fonts/IRANSans.ttf",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | پروجیم",
    default: "پروجیم",
    lang: "fa-IR",
  },
  description: "Strong Girls Club",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa-IR">
      <body className={`${myFont.className} bg-light`}>
        <NextAuthProvider>
          <header>
            <NavBar />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}
