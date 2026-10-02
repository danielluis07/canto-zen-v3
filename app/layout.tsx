import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { hanken, sourceSerif } from "@/fonts";

export const metadata: Metadata = {
  title: "Canto Zen — homepage composition prototype",
  description: "Throwaway comparison of three homepage compositions. Planning only.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        hanken.variable,
        sourceSerif.variable,
      )}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
