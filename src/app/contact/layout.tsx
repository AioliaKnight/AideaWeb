import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡我們 | Aidea:Med",
  description: "與Aidea:Med團隊聯絡，了解如何為您的牙醫診所提供數位行銷解決方案。免費諮詢，專業建議。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 