import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { Box, Container } from "@mui/material";
import Logo from "./Logo";

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
      <Box
        sx={[
          (theme) => ({
            background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 35%, ${theme.palette.primary.light} 70%, #F0FBFF 100%);`,
          }),
        ]}
      >
        <Container maxWidth="sm"></Container>
      </Box>
      <Box sx={{ flexGrow: 1, pb: 8 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
