import type { Metadata } from "next"; 
import "./globals.css";
import { geistSans, geistMono  } from "@/app/ui/fonts";


  
export const metadata: Metadata = {
  title: "Create kahouach App",
  description: "kahouach app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
