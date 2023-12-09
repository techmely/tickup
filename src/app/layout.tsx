import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const FontBeVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "700"],
  subsets: ["vietnamese", "latin"],
});

export const metadata: Metadata = {
  title: "Tickup - Techmely 🔥",
  description: "Super clone ClickUp - Techmely",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * Ta cần define ra css variables ở đây để khi nào ta muốn reactive một cái gì đó
   * liên quan tới UI thì sẽ chạm vào nó để thay đổi global mà không cần thay đổi CSS
   * VD:
   * - Chèn thanh thông báo chương trình khuyến mãi/thông báo quan trọng lên trên cùng Web
   *
   */
  const bodyStyles = {
    "--global-actions-bar-height": "56px",
  } as React.CSSProperties;

  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={FontBeVietnamPro.className} style={bodyStyles}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
