import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffdcdc",
      main: "#F06060",
    },
    secondary: {
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

export default theme;
