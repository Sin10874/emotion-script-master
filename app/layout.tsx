import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Script Master - AI 直播剧本生成平台",
  description: "专业的 AI 驱动直播剧本生成平台",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}