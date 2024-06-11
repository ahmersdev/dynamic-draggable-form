import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import "./globals.scss";
import Loader from "@/components/loader";
import RootTheme from "@/layout/root-theme";
import { Settings } from "@/types";
import { cookies } from "next/headers";
import { COOKIES_KEYS } from "@/constants/strings";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Draggable Form Builder",
  description:
    "Create and manage dynamic forms with ease using our drag-and-drop interface.",
  applicationName: "Dynamic Draggable Form Builder",
  authors: [{ name: "Ahmer's Dev" }],
  referrer: "origin-when-cross-origin",
  creator: "Ahmer's Dev",
  publisher: "Ahmer's Dev",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://dynamic-draggable-form.vercel.app/"),
  openGraph: {
    title: "Dynamic Draggable Form Builder",
    description:
      "Create and manage dynamic forms with ease using our drag-and-drop interface.",
    url: "https://dynamic-draggable-form.vercel.app/",
    siteName: "Dynamic Form Builder",
    images: [
      { url: "/og-image.png", width: 800, height: 600 },
      {
        url: "/og-image.png",
        width: 1800,
        height: 1600,
        alt: "Dynamic Form Builder",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Draggable Form Builder",
    description:
      "Create and manage dynamic forms with ease using our drag-and-drop interface.",
    creator: "Ahmer's Dev",
    images: {
      url: "/og-image.png",
      alt: "Dynamic Form Builder Cover",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
  themeColor: "dark",
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
