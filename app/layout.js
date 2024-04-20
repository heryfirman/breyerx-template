import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DreyerX",
  description: "Bridge from/to DreyerX",
  // icons: {
  //   icon: "/dreyerx_logo.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="{inter.className} font-mono">
        <link rel="shortcut icon" href="/dreyerx_logo.ico" />
        {children}
      </body>
    </html>
  );
}
