export type ColorPreset = "blue" | "green" | "indigo" | "yellow";

export type Contrast = "normal" | "high";

export type Direction = "ltr" | "rtl";

export type PaletteMode = "dark" | "light";

export type Layout = "horizontal" | "vertical";

export type NavColor = "blend-in" | "discrete" | "evident";

export interface Settings {
  colorPreset?: ColorPreset;
  contrast?: Contrast;
  direction?: Direction;
  layout?: Layout;
  navColor?: NavColor;
  paletteMode?: PaletteMode;
  responsiveFontSizes?: boolean;
  stretch?: boolean;
  disableButtonsOnLoginAs?: boolean;
}

export interface State extends Settings {
  openDrawer: boolean;
  isInitialized: boolean;
}

export interface SettingsContextType extends State {
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
  handleReset: () => void;
  handleUpdate: (settings: Settings) => void;
  isCustom: boolean;
}

export interface ThemeConfig {
  colorPreset?: ColorPreset;
  contrast?: Contrast;
  direction?: Direction;
  paletteMode?: PaletteMode;
  responsiveFontSizes?: boolean;
  disableButtonsOnLoginAs?: boolean;
}

export type LoaderPushStateInput = [
  data: unknown,
  unused: string,
  url?: string | URL | undefined
];
