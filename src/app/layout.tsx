import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Aidea:Med - 牙醫診所數位轉型專家",
    template: "%s | Aidea:Med",
  },
  description: "Aidea:Med 結合 AI、創意與醫療專業，為牙醫診所提供全方位的數位行銷解決方案。",
  keywords: ["牙醫診所", "數位行銷", "網站設計", "AI 行銷", "醫療行銷", "診所行銷"],
  authors: [{ name: "Aidea:Med" }],
  creator: "Aidea:Med",
  publisher: "Aidea:Med",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://aidea-med.com",
    siteName: "Aidea:Med",
    title: "Aidea:Med - 牙醫診所數位轉型專家",
    description: "結合 AI、創意與醫療專業，為牙醫診所提供全方位的數位行銷解決方案。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aidea:Med",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aidea:Med - 牙醫診所數位轉型專家",
    description: "結合 AI、創意與醫療專業，為牙醫診所提供全方位的數位行銷解決方案。",
    images: ["/og-image.jpg"],
    creator: "@aideamed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="h-full scroll-smooth">
      <body className={`${inter.className} h-full`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
