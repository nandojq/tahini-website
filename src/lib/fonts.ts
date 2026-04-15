import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const titania = localFont({
  src: "../../public/fonts/Titania-Regular.ttf",
  variable: "--font-titania",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
