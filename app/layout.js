"use client"; // Keep this directive for client-side code

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-only code runs after the initial render
  }, []);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {isClient && <Toaster />} {/* Only render on the client */}
          {isClient && (
            <ThemeProvider
              attribute="class"
              defaultTheme="white"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}
