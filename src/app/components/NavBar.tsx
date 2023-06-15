import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "./Link";
import Logo from "./Logo";
import LaunchIcon from "@mui/icons-material/Launch";

const pages = [
  { label: "Home", link: "/" },
  { label: "About", link: "#about" },
  { label: "Testimonials", link: "#testimonials" },
  { label: "Events", link: "#events" },
  { label: "Contact", link: "mailto:zabiubabar@gmail.com" },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box p={3}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.link}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={page.link}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                href="https://www.meetup.com/tampa-volunteers/#pledge"
              >
                <Typography textAlign="center">Donate</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Logo
            sx={{
              position: "relative",
              display: {
                xs: "flex",
                md: "none",
                width: "auto",
                height: 56,
                aspectRatio: 2.89,
              },
              mr: 1,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Logo
            sx={{
              position: "relative",
              display: {
                xs: "none",
                md: "flex",
                width: "auto",
                height: 56,
                aspectRatio: 2.89,
              },
              mr: 1,
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "end",
              display: { xs: "none", md: "flex" },
              gap: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                href={page.link}
                key={page.link}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "secondary.contrastText",
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
            <Button
              component={Link}
              href="https://www.meetup.com/tampa-volunteers/#pledge"
              onClick={handleCloseNavMenu}
              endIcon={<LaunchIcon />}
              target="_blank"
              rel="noopener"
              variant="contained"
              disableElevation
              sx={{
                my: 2,
              }}
            >
              Donate
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
