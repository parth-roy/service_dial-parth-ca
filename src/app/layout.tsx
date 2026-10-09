import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrganizationSchema from "@/components/OrganizationSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://servicedialtm.com"),
  title: {
    default: "Service Dial – Staffing, Payroll, Finance & Compliance Solutions",
    template: "%s | Service Dial",
  },
  description:
    "Service Dial delivers premium staffing, HRMS & payroll management, finance & audit, and compliance services across India. Established 2016. 100% referenceable clients. NDA protected.",
  keywords: [
    "staffing company India",
    "payroll management",
    "HRMS solutions",
    "compliance services",
    "finance and audit",
    "IT staffing",
    "CXO recruitment",
    "blue collar staffing",
  ],
  authors: [{ name: "Service Dial" }],
  creator: "Service Dial",
  publisher: "Service Dial",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://servicedialtm.com",
    siteName: "Service Dial",
    title: "Service Dial – Simplifying Business",
    description:
      "Premium staffing, HRMS & payroll, finance & audit, and compliance solutions across India since 2016.",
    images: [
      {
        url: "/logo.png",
        width: 619,
        height: 575,
        alt: "Service Dial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Dial – Simplifying Business",
    description:
      "Premium staffing, HRMS & payroll, finance & audit, and compliance solutions across India since 2016.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-sd-bg text-sd-text antialiased">
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
