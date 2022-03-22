import { Theme } from  "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    blue: ColorPartial
  }
  interface PaletteOptions {
    blue: ColorPartial
  }
}

const generateColors = (rgb: string) => {
  return {
    100: `rgba(${rgb}, 0.04)`
  }
}

const palette = (theme: Theme) => {
  //text

  // red
  theme.palette.primary.main = "#E4002B";
  theme.palette.primary.light = "#BB86FC";
  theme.palette.primary.dark = "#3700B3";
  // grey
  theme.palette.secondary.main = "#A5ADB5";
  theme.palette.secondary.dark = "#333F48";
  theme.palette.secondary.light = "#D2D5DA";

}

export default palette;
