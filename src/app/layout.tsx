import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.scss";
import Loader from "@/components/loader";
import RootTheme from "@/layout/root-theme";
import { Settings } from "@/types";
import { cookies } from "next/headers";
import { COOKIES_KEYS } from "@/constants/strings";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Draggable Form",
  description: "Dynamic Draggable Form",
};

const restoreSettings = (): Settings | undefined => {
  const cookieList = cookies();

  let value: Settings | undefined;

  if (cookieList.has(COOKIES_KEYS.SETTINGS_STORAGE_KEY)) {
    try {
      const restored = cookieList.get(COOKIES_KEYS.SETTINGS_STORAGE_KEY);

      if (restored) {
        value = JSON.parse(restored.value) as Settings | undefined;
      }
    } catch (err) {
      console.error(err);
    }
  }

  return value;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = restoreSettings();

  return (
    <html lang="en">
      <body className={mulish.className}>
        <RootTheme settings={settings}>
          <Loader />
          {children}
        </RootTheme>
      </body>
    </html>
  );
}
