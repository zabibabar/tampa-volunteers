import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { Box } from "@mui/material";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box sx={{ flexGrow: 1, pb: 8 }} bgcolor="#f7f6f0">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
