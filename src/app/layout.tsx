import type { Metadata } from "next";
import { MSWProvider } from "./MSWProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test",
  description: "Locale, MSW, Status Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MSWProvider />
        {children}
      </body>
    </html>
  );
}
