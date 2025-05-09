import type { Metadata } from "next";
import { Abel } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";

const abel = Abel({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Devalentine's Portfolio",
  description: "A showcase of my web development projects, skills, and experience in software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={abel.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex items-center justify-center p-4">
            <div className="max-w-7xl w-full text-white">{children}</div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
