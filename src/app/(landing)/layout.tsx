import type { Metadata } from "next";

import "../globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

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
    <>
      <Header />
      <div className="min-h-full flex flex-col">
        <main className="flex flex-col flex-1 items-center justify-center ">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
