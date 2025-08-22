import type { Metadata } from "next";
import { nunitoSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Task",
  description: "Test Task by Alex Prokopiev",
  keywords: ["Test Task", "Alex Prokopiev", "Working with GET request", "Working with POST request"],
  
  openGraph: {
    title: "Test Task",
    description: "Test Task by Alex Prokopiev",
    url: "https://test-task-2022.vercel.app/",
    images: [
      {
        url: "https://i.postimg.cc/dQS4bVJ0/logo-next.png",
        alt: "Test Task Image",
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
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
