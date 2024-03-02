import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { Box } from "@mui/material";
import Topbar from "./Topbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
      bgcolor="secondary.light"
    >
      <Topbar />
      <Navbar />
      <Box sx={{ flexGrow: 1, pb: 8 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
