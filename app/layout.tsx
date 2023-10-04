import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUKA - Scottish United Konkani Association",
  description:
    "The Scottish United Konkani Association (SUKA) was formed in 2023 when a few Mangalorean families in Edinburgh got together as an informal group . They had one common vision : To feel a sense of belonging and share values  with other like minded Mangaloreans , in a place far away from home.",
  keywords: "mangalorean, konkani, scotland, edinburgh, suka, association",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
