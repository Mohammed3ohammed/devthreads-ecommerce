// "use client";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Raleway } from "next/font/google";
// import getCurrentUser from "./(auth)/api/[...nextauth]/action/getCurrentUser";



const raleway = Raleway({ subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "900"]
 });

export const metadata: Metadata = {
  title: "Dev-Threads",
  description: "E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await getCurrentUser();   user={user!}/
  return (
    <html lang="en">
      
      <body className={raleway.className}>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
