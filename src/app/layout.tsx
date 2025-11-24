import Footer from "@/components/Layout/Footer";
import { cn } from "@/lib/utils";
import BaseProvider from "@/Providers/BaseProvider";
import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";

const jura = Jura({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mr. Tindanzor Simon",
  description: "Mr. Tindanzor Simon - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Mr. Tindanzor" />
      </head>

      <body
        style={{
          scrollbarWidth: "thin",
        }}
        className={cn(
          "overflow-y-auto bg-slate-950 overflow-x-hidden text-gray-300 tracking-wide antialiased",
          jura.className
        )}
      >
        <BaseProvider>{children}</BaseProvider>
        <Footer />
      </body>
    </html>
  );
}
