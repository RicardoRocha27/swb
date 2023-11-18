import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import ScrollToTop from "@/components/scroll-to-top";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { CustomLocale } from "@/types";
import { ToastProvider } from "@/providers/toast-provider";
import Footer from "@/components/footer/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Web Builders - SWB Official",
  description:
    "Crafting dynamic, user-centric online experiences that go beyond the ordinary. We shape destinies, not just websites.",
  keywords: [
    "Web Development",
    "Websites",
    "Website Agency",
    "Web Apps",
    "Design",
    "Developers",
    "Agencia de Websites",
    "Digital Agency",
    "Super Web Builders",
  ],
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
        <ScrollToTop />
        <Navbar locale={locale} />
        {children}
        <Footer />

        <ToastProvider />
      </body>
    </html>
  );
}
