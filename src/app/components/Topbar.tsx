import * as React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SocialLinks from "./SocialLinks";
import { Box } from "@mui/material";

export default function Topbar() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          py: 1,
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
        }}
      >
        <SocialLinks></SocialLinks>
      </Box>
    </Container>
  );
}
