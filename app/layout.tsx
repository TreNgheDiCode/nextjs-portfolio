import type { Metadata } from "next";
import { Inter, Lusitana } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ModeToggle } from "@/components/ui/ModeToggle";

const inter = Inter({ subsets: ["latin"] });
const lusitana = Lusitana({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phung Quang Long's Portfolio",
  description: "Modern & Minimalist React Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lusitana.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
