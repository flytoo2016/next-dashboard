import { Geist, Geist_Mono, Inter, Lusitana } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  variable: "--font-lusitana",
  weight: ["400", "700"],
});
