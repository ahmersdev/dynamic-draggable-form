import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.scss";
import Loader from "@/components/loader";
import RootTheme from "@/layout/root-theme";
import { Settings } from "@/types";
import { cookies } from "next/headers";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Draggable Form",
  description: "Dynamic Draggable Form",
};

const SETTINGS_STORAGE_KEY = "app.settings";

const restoreSettings = (): Settings | undefined => {
  const cookieList = cookies();

  let value: Settings | undefined;

  if (cookieList.has(SETTINGS_STORAGE_KEY)) {
    try {
      const restored = cookieList.get(SETTINGS_STORAGE_KEY);

      if (restored) {
        value = JSON.parse(restored.value) as Settings | undefined;
      }
    } catch (err) {
      console.error(err);
      // If stored data is not a stringified JSON this will fail,
      // that's why we catch the error
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
