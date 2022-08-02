import React, { FC, ReactNode } from "react";
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 475,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  spacing: [0, 4, 8, 12, 16, 24, 36],
  palette: {
    primary: {
      main: "#C4C4C4",
      light: "#FDEFEF",
      dark: "#F29D9D",
    },
    secondary: {
      main: "#000000",
      light: "#FFFFFF",
    },
    info: {
      main: "#C4C4C4",
      light: "#EDE5E5",
    },
  },
});

interface IAppThemeProps {
  children?: ReactNode;
}

const AppTheme: FC<IAppThemeProps> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
);

export default AppTheme;
