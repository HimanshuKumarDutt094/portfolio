import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Himanshu Dutt - portfolio",
    description:
        "My simple portfolio website, i know it looks trash but i find it really nice.",
    keywords: [
        "portfolio",
        "Himanshu",
        "himanshu",
        "himanshu kumar",
        "Himanshu Kumar",
        "himanshu dutt",
        "dutt",
        "himanshu kumar dutt",
        "mern developer",
        "nextjs",
        "reactjs",
        "linkedin",
        "github",
        "internhub",
        "internhub.in",
        "internware",
        "iitm",
        "ggsipu",
        "bca",
        "SAP Labs",
        "fullstack developer",
        "personal resume",
    ],
    manifest: "/manifest.json",
};
export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Await params as required by Next.js 15+
    const { locale } = await params;

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <NextIntlClientProvider messages={messages}>
                <body className={inter.className}>{children}</body>
            </NextIntlClientProvider>
        </html>
    );
}
