import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {/* <ThemeButton /> */}
            {children}
          </TooltipProvider>
      </body>
    </html>
  );
}
