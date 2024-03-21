import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Layout from "../lib/layout";

const APP_NAME = "MEANS";

export const metadata: Metadata = {
  title: APP_NAME,
  description: "",
  // openGraph: {
  //   url: "https://rel8.com",
  //   title: APP_NAME,
  //   description: "",
  //   siteName: "REL8",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
