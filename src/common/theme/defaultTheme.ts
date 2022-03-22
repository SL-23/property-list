import { createTheme, Theme } from "@mui/material/styles";
// import typographyOverrides from "./typographyOverrides";
// import cssBaselineOverrides from "./cssBaselineOverrides";
// import buttonOverrides from "./buttonOverrides";
import palette from "./palette";

const defaultTheme : Theme = createTheme({

})

palette(defaultTheme);

defaultTheme.components = {
  // MuiTypography: typographyOverrides(defaultTheme),
  // MuiCssBaseline: cssBaselineOverrides(defaultTheme),
  // MuiButton: buttonOverrides(defaultTheme)
}

export default createTheme(defaultTheme);