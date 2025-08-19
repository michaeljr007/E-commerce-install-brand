import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "@/styles/globals.css";
import { SessionProviderWrapper } from "@/components/SessionProviderWrapper";
import GlobalLoader from "@/components/GlobalLoader";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Install Brand | Welcome",
  description: "Install Brand - Your One-Stop Shop for Fashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${ubuntu.variable} font-sans`}>
        <SessionProviderWrapper>
          <GlobalLoader>{children}</GlobalLoader>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
