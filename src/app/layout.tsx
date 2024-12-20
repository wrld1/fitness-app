import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import "./globals.css";
import { ukUA } from "@clerk/localizations";
import ToasterProvider from "@/components/providers/toaster-provider";
import { ourFileRouter } from "./api/uploadthing/core";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { Geologica } from "next/font/google";

const geologica = Geologica({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  style: ["normal"],
  display: "swap",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Курси Лізи",
  description: "Прокачай своє тіло",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/" localization={ukUA}>
      <html lang="en" className={geologica.className}>
        <body className="min-h-screen">
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          <ConfettiProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
