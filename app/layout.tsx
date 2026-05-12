import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/app/context/ThemeContext";
import '@/app/globals.css';
import NextTopLoader from 'nextjs-toploader';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Duckling',
  },
  description: 'The rubber duck debugger for developers. Get unstuck without the shame.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <NextTopLoader
                    color='#314c79'
                    height={3}
                    showSpinner={false}
                />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
