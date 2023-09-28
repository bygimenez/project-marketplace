import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import Navbar  from "@/components/navbar";
import clsx from "clsx";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="author" content="bydeivih" />
        <meta name="keywords" content="AI, IA, IA Hispano, ModelAI, RVC, SVC, Open Source" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={clsx(
          "flex flex-col min-h-screen bg-background font-inter antialiased"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto flex-grow">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
