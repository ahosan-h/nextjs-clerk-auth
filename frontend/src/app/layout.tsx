import type { Metadata } from "next";

import {
  ClerkProvider,
} from "@clerk/nextjs";

import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Clerk Auth",
  description:
    "Next.js + Express + MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}

          <Toaster
            position="top-right"
            richColors
            expand
            closeButton
            toastOptions={{
              duration: 3000,

              style: {
                borderRadius: "12px",
                padding: "14px 16px",
                fontSize: "14px",
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}