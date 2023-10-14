import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { CustomLocale } from "@/types";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Web Builders - SWB Official",
  description: "Super Web Builders official",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: CustomLocale };
}) {
  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <Navbar locale={locale} />
        {children}
      </body>
    </html>
  );
}
