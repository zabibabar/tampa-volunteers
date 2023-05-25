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
      main: "#fff",
    },
    secondary: {
      main: "#8CBEB2",
    },
    text: {
      primary: "#00294A",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
