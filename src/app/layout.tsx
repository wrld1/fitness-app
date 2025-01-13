import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import "./globals.css";
import { ukUA } from "@clerk/localizations";
import ToasterProvider from "@/components/providers/toaster-provider";
import { ourFileRouter } from "./api/uploadthing/core";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  style: ["normal"],
  display: "swap",
});

// const recolor = localFont({
//   src: "../../public/fonts/recolor.otf",
//   display: "swap",
//   variable: "--font-recolor",
// });

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
  title: "Body Update by Liza Fabis",
  description: "Онови своє тіло",
  openGraph: {
    type: "website",
    url: "https://body-update.com.ua",
    title: "Body Update by Liza Fabis",
    description: "Онови своє тіло",
    siteName: "Body Update",
    images: [
      {
        url: `/logos/logo2-black.png`,
        width: 400,
        height: 200,
        alt: "Logo",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/" localization={ukUA}>
      <html lang="en" className={spectral.className}>
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
