import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import { ConvexClientProvider } from "@/providers/convex-client-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Board",
  description:
    "Board is a real-time collaborative whiteboard application built with Next.js, Convex, Clerk, and Liveblocks. It allows users to create and join organizations, collaborate on boards, and draw or annotate together in real time. The app supports authentication, organization management, and a rich, interactive canvas for drawing and note-taking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          {children}
          <ModalProvider />
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
