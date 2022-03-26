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
  theme.palette.text.primary = "#3D3B40";
  theme.palette.text.secondary = "#A5ADB5";
  theme.palette.secondary.main = "#A5ADB5";
  theme.palette.secondary.dark = "#3D3B40";
  theme.palette.secondary.light = "#C1C1C1";

}

export default palette;
