import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar";


const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Travel for you next destination",
  description: "Travel landing page using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNavbar/>
        {children}
        Footer
      </body>
    </html>
  );
}
