import { Commissioner } from "next/font/google";
import "./globals.css";
import Aside from "@/components/header/aside";
import Nav from "@/components/header/nav";
import MainContainerShadow from "@/components/mainContainerShadow/mainContainerShadow";
import Footer from "@/components/footer/footer";
import { NextAuthProvider } from "../providers/Providers";
import { OnboardingProvider } from "../context/MyContext";
const font = Commissioner({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextAuthProvider>
          <OnboardingProvider>
            <Aside />
            <Nav />
            <MainContainerShadow>{children}</MainContainerShadow>
            <Footer />
          </OnboardingProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
