import { Poppins } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

let theme = createTheme({
  palette: {
    primary: {
      light: "#ffdcdc",
      main: "#F06060",
    },
    secondary: {
      light: "#66c0a415",
      main: "#66c0a4",
    },
    text: {
      primary: "#26241f",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
