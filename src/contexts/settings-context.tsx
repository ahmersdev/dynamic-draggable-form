"use client";

import { Settings, SettingsContextType, State } from "@/types";
import { createContext } from "react";

export const defaultSettings: Settings = {
  direction: "ltr",
  layout: "vertical",
  responsiveFontSizes: false,
  colorPreset: "yellow",
  contrast: "normal",
  navColor: "evident",
  paletteMode: "dark",
  stretch: false,
  disableButtonsOnLoginAs: false,
};

export const initialState: State = {
  isInitialized: false,
  openDrawer: false,
};

export const SettingsContext = createContext<SettingsContextType>({
  ...defaultSettings,
  ...initialState,
  handleDrawerClose: () => {},
  handleDrawerOpen: () => {},
  handleReset: () => {},
  handleUpdate: () => {},
  isCustom: false,
});
