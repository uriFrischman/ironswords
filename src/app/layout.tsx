import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import Sidebar from "@/components/navigation/sidebar";
import NavbarHeader from "@/components/navigation/navbar-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider headers={headers()}>
          <div className="flex">
            <Sidebar />
            <div className=" flex flex-1 flex-col ">
              <NavbarHeader />
              {children}
            </div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
