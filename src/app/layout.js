import { Volkhov } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-volkhov",
});

export const metadata = {
  title: "E-commerce App",
  description: "A simple e-commerce application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" >
      <body className={volkhov.variable}>
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}
