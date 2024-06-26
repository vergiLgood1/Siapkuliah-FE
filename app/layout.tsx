import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/cn";
import { ThemeProvider } from "@/providers/theme-provider";
import Provider from "@/providers/redux-provider";
import { Toaster } from "sonner";
import { NextUIProvider } from "@nextui-org/system";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siapkuliah",
  description: "a counseling platform for students",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/logo-white.svg",
        href: "/icons/logo-white.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/logo-white.svg",
        href: "/icons/logo-white.svg",
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
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy dark:bg-[#1f1f1f]",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextUIProvider>
            <Toaster position="top-center" richColors={true} />
            <Provider>{children}</Provider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
