import { alpha } from "@mui/system/colorManipulator";
import type { PaletteOptions } from "@mui/material/styles/createPalette";
import {
  error,
  info,
  neutral,
  success,
  warning,
  grey,
  secondaryDark,
  gradients,
} from "..";
import { ColorPreset, Contrast } from "@/types";
import { getPrimary } from "..";

interface Config {
  colorPreset?: ColorPreset;
  contrast?: Contrast;
}

export const createPalette = (config: Config): PaletteOptions => {
  const { colorPreset, contrast } = config;

  return {
    common: {
      white: "#fff",
      black: "#000",
    },
    action: {
      active: neutral[500],
      disabled: alpha(neutral[100], 0.38),
      disabledBackground: alpha(neutral[100], 0.12),
      focus: alpha(neutral[100], 0.16),
      hover: alpha(neutral[100], 0.04),
      selected: alpha(neutral[100], 0.12),
    },
    background: {
      default: contrast === "high" ? "#0B0B12" : "#23232a",
      paper: neutral[900],
    },
    divider: "#2D3748",
    primary: getPrimary(colorPreset),
    secondary: secondaryDark,
    error,
    info,
    mode: "dark",
    neutral,
    success,
    grey,
    text: {
      primary: "#EDF2F7",
      secondary: "#A0AEC0",
      disabled: "rgba(255, 255, 255, 0.48)",
    },
    warning,
    gradients,
  };
};
