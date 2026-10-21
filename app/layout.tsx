import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oruma Electricals & Repair Shop | Orumanayoor, Kerala",
  description: "Looking for electrical repairs or appliance servicing in Orumanayoor, Thrissur, Kerala? Contact Oruma Electricals & Repair Shop for service enquiries.",
  applicationName: "Oruma Electricals & Repair Shop",
  openGraph: {
      title: "Oruma Electricals & Repair Shop",
    description:
      "Electrical repairs, appliance servicing and doorstep service in Orumanayoor, Kerala.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
