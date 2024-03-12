import type { Metadata } from "next";
import { Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import NavBar from "./(base-layout)/_components/shared/navBar/NavBar";

const mainFont = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Toefl Discount Code",
  description:
    "Get FREE Toefl discount codes for 2024 on your TOEFL Registration. Avail a INR 2000 Discount on the TOEFL iBT fees. Check Code Here
",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await new Promise(resolve => setTimeout(resolve,3000))
  return (
    <html lang="en" className={cn(mainFont.className)}>
      <body>
        <NavBar/> {children}</body>
    </html>
  );
}
