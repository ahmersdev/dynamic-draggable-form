"use client";

import { SettingsProvider } from "@/contexts/settings-provider";
import { LayoutProps } from "@/types";
import { NextAppDirEmotionCacheProvider } from "tss-react/next";
import { SettingsConsumer } from "@/contexts/settings-consumer";
import type { Theme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { createTheme } from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { SettingsButton } from "@/components/settings";
import { SettingsDrawer } from "@/components/settings-drawer";
import { GlobalStyles } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { resetSettings, updateSettings } from "@/utils/root-theme";

export default function RootTheme(props: LayoutProps) {
  const { children, settings } = props;

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider
          onReset={resetSettings}
          onUpdate={updateSettings}
          settings={settings}
        >
          <SettingsConsumer>
            {(themeSettings) => {
              const theme: Theme = createTheme({
                direction: themeSettings.direction,
                responsiveFontSizes: themeSettings.responsiveFontSizes,
                colorPreset: themeSettings.colorPreset,
                contrast: themeSettings.contrast,
                paletteMode: themeSettings.paletteMode,
              });
              return (
                <ThemeProvider theme={theme}>
                  <Head>
                    <meta
                      name="color-scheme"
                      content={themeSettings.paletteMode}
                    />
                    <meta
                      name="theme-color"
                      content={theme.palette.neutral[900]}
                    />
                  </Head>
                  <GlobalStyles
                    styles={{
                      "&::-webkit-scrollbar": {
                        width: 10,
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: theme.palette.primary.main,
                        borderRadius: 8,
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: theme.palette.primary.dark,
                      },
                    }}
                  />
                  <CssBaseline />
                  {children}
                  <SettingsButton onClick={themeSettings.handleDrawerOpen} />
                  <SettingsDrawer
                    canReset={themeSettings.isCustom}
                    onClose={themeSettings.handleDrawerClose}
                    onReset={themeSettings.handleReset}
                    onUpdate={themeSettings.handleUpdate}
                    open={themeSettings.openDrawer}
                    values={{
                      direction: themeSettings.direction,
                      responsiveFontSizes: themeSettings.responsiveFontSizes,
                      stretch: themeSettings.stretch,
                      layout: themeSettings.layout,
                      colorPreset: themeSettings.colorPreset,
                      contrast: themeSettings.contrast,
                      paletteMode: themeSettings.paletteMode,
                      navColor: themeSettings.navColor,
                    }}
                  />
                </ThemeProvider>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </LocalizationProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
