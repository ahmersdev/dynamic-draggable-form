import type { PaletteColor } from "@mui/material/styles/createPalette";

import { blue, green, indigo, yellow } from "./colors";
import { ColorPreset } from "@/types";

export const getPrimary = (preset?: ColorPreset): PaletteColor => {
  switch (preset) {
    case "blue":
      return blue;
    case "green":
      return green;
    case "indigo":
      return indigo;
    case "yellow":
      return yellow;
    default:
      console.error(
        'Invalid color preset, accepted values: "blue", "green", "indigo" or "yellow"".'
      );
      return blue;
  }
};
