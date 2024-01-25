import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/page";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Contacts from "./components/contacts/Contacts";
import CustomFont from "../assets/theme/CustomFont";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <CustomFont>
          <Contacts />
          <Navigation />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </CustomFont>
      </body>
    </html>
  );
}
