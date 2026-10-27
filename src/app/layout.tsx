import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrganizationSchema from "@/components/OrganizationSchema";
import FloatingContact from "@/components/FloatingContact";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-sd-bg text-sd-text antialiased">
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
