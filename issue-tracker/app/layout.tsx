import '@radix-ui/themes/styles.css';
import './theme-config.css';
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Theme, ThemePanel } from '@radix-ui/themes'
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"],
variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      <Theme accentColor="sky" radius="full">
        <NavBar />
        <main className='p-5'>
          <Container>{children}</Container>
        </main>
        </Theme>
      </body>        
    </html>
  );
}
