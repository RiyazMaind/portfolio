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
  title: "Riyaz Maind | Data Science & Analytics Portfolio",
  description: "Riyaz Maind - Data science enthusiast and ML engineer. Explore data science projects, machine learning models, predictive analytics, and data visualization solutions. Building scalable ML solutions with Python, TensorFlow, and modern data tools.",
  keywords: ["Riyaz Maind", "Data Science", "Machine Learning", "Analytics", "Python", "Data Visualization", "ML Engineer", "Predictive Analytics", "Riyaz"],
  authors: [{ name: "Riyaz Maind" }],
  creator: "Riyaz Maind",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://riyaz.dev",
    title: "Riyaz Maind | Data Science & Analytics Portfolio",
    description: "Data science and ML portfolio by Riyaz Maind - Projects in machine learning, analytics dashboards, and intelligent models.",
    siteName: "Riyaz Maind Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@riyazmaind",
    title: "Riyaz Maind | Data Science & Analytics Portfolio",
    description: "Riyaz Maind - Data science enthusiast building ML models and analytics dashboards.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://riyaz.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
