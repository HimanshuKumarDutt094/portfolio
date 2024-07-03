import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himanshu Dutt - portfolio",
  description: "My simple portfolio website, i know it looks trash but i find it really nice.",
  keywords: ["portfolio", "Himanshu", "himanshu", "himanshu kumar", "Himanshu Kumar", "himanshu dutt", "dutt", "himanshu kumar dutt", "mern developer", "nextjs", "reactjs", "linkedin", "github", "internhub", "internhub.in", "internware", "iitm", "ggsipu", "bca", "SAP Labs", "fullstack developer", "personal porfolio"]
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
