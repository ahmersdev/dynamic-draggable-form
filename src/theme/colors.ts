import { alpha } from "@mui/system/colorManipulator";
import type {
  ColorRange,
  PaletteColor,
} from "@mui/material/styles/createPalette";

export function createGradient(color1: string, color2: string) {
  return `linear-gradient(90deg, ${color1} 10.76%, ${color2} 133.7%)`;
}

const withAlphas = (color: PaletteColor): PaletteColor => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const blue = withAlphas({
  lightest: "#D1E9FF",
  light: "#84CAFF",
  main: "#2E90FA",
  dark: "#175CD3",
  darkest: "#194185",
  contrastText: "#FFFFFF",
});

export const green = withAlphas({
  lightest: "#D1FADF",
  light: "#6CE9A6",
  main: "#12B76A",
  dark: "#027A48",
  darkest: "#054F31",
  contrastText: "#FFFFFF",
});

export const indigo = withAlphas({
  lightest: "#E0EAFF",
  light: "#A4BCFD",
  main: "#6172F3",
  dark: "#3538CD",
  darkest: "#2D3282",
  contrastText: "#FFFFFF",
});

export const purple = withAlphas({
  lightest: "#A57DE9",
  light: "#9668E5",
  main: "#6927DA",
  dark: "#783DDE",
  darkest: "#8752E1",
  contrastText: "#FFFFFF",
});

export const secondaryDark: ColorRange = {
  50: "#0B0B12",
  900: "#23232A",
  800: "#3C3C41",
  700: "#545459",
  600: "#6D6D71",
  500: "#858588",
  400: "#9D9DA0",
  300: "#B6B6B8",
  200: "#CECED0",
  100: "#E7E7E7",
};

export const secondaryLight: ColorRange = {
  50: "#ddd",
  900: "#CCC",
  800: "#BBB",
  700: "#AAA",
  600: "#999",
  500: "#888",
  400: "#777",
  300: "#666",
  200: "#555",
  100: "#444",
};

export const grey: ColorRange = {
  50: "#111827",
  100: "#F9FAFB",
  200: "#F3F4F6",
  300: "#E5E7EB",
  400: "#D1D5DB",
  500: "#9CA3AF",
  600: "#6B7280",
  700: "#4B5563",
  800: "#374151",
  900: "#1F2937",
};

export const info: any = {
  50: "#3A70E2",
  700: "#3B82F6",
  600: "#4BA1FF",
  500: "#93C8FF",
  400: "#BDDDFF",
  300: "#E4F2FF",
  200: "#F1F8FF",
  contrastText: "#F8FCFF",
};

export const success: any = {
  50: "#0C9D61",
  700: "#47B881",
  600: "#6BC497",
  500: "#97D4B4",
  400: "#C0E5D1",
  300: "#E5F5EC",
  200: "#F2FAF6",
  contrastText: "#FBFEFC",
};

export const warning: any = {
  50: "#FE9B0E",
  700: "#FFAD0D",
  600: "#FFC62B",
  500: "#FFDD82",
  400: "#FFEAB3",
  300: "#FFF7E1",
  200: "#FFF9EE",
  contrastText: "#FFFDFA",
};

export const error: any = {
  main: "#EC2D30",
  700: "#F64C4C",
  600: "#EB6F70",
  500: "#F49898",
  400: "#FFCCD2",
  300: "#FFEBEE",
  200: "#FEF2F2",
  contrastText: "#FFFBFB",
};

export const neutral: any = {
  50: "#1F1F1F",
  700: "#4B4B4B",
  600: "#8E8E8E",
  500: "#CACACA",
  400: "#E1E1E1",
  300: "#EEEEEE",
  200: "#F5F5F5",
  100: "#FAFAFA",
  800: "#1D2939",
  900: "#101828",
  p500: "#B493ED",
  p400: "#C3A9F0",
  p300: "#D2BEF4",
  p200: "#E1D4F8",
  p100: "#F0E9FB",
};

export const gradients = {
  primary: "linear-gradient(90deg, #6927DA 0%, #8843FF 100%)",
  secondary:
    "linear-gradient(89.87deg, rgba(105, 39, 218, 0.2) 0.11%, rgba(105, 39, 218, 0) 99.9%)",
  button1:
    "linear-gradient(0deg, #F0E9FB, #F0E9FB), linear-gradient(0deg, #E1D4F8, #E1D4F8)",
  button1Hover:
    "linear-gradient(0deg, #E1D4F8, #E1D4F8), linear-gradient(0deg, #D2BEF4, #D2BEF4)",
};
