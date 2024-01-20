import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.scss";
import Loader from "@/components/loader";
import RootTheme from "@/layout/root-theme";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Draggable Form",
  description: "Dynamic Draggable Form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <RootTheme>
          <Loader />
          {children}
        </RootTheme>
      </body>
    </html>
  );
}
