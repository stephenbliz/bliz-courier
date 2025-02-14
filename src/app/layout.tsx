import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./Components/header";
import Footer from "./Components/footer";

const poppins = Poppins({
  weight: ['400','600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '700'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blizcourier",
  description: "Ship and track your package seemlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${roboto.variable} ${poppins.variable}`}
    >
      <body
        className={`text-textColor text-[0.9rem] tracking-wider leading-relaxed font-bodyFont bg-whiteColor`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
