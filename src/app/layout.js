import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import { Toaster } from "react-hot-toast";
import NavManue from "@/shared/NavManue";
import { SessionProvider } from "next-auth/react";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className=" z-30">
            <Navbar />
            <NavManue />
          </div>
          {children}
          <Toaster
            position="top-center"
            containerClassName="text-xs"
            reverseOrder={false}
          />
        </Providers>
      </body>
    </html>
  );
}
