import type { ThemeOptions } from "@mui/material/styles/createTheme";

import { createTypography } from "./create-typography";
import { createComponents } from "./create-components";
import { Direction } from "@/types";

interface Config {
  direction?: Direction;
  disableButtonsOnLoginAs?: boolean;
}

export const createOptions = (config: Config): ThemeOptions => {
  const { direction = "ltr", disableButtonsOnLoginAs = false } = config;
  return {
    spacing: 10,
    breakpoints: {
      values: {
        xxs: 0,
        xs: 360,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
        xxl: 1760,
      },
    },
    components: createComponents({ disableButtonsOnLoginAs }),
    direction,
    shape: {
      borderRadius: 8,
    },
    typography: createTypography(),
  };
};
