import "tailwindcss/tailwind.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from "./providers";
import { ThemeButton } from "@/components/Theme";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeButton />
          {children}
        </Providers>
      </body>
    </html>
  );
}
