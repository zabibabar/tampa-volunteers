import * as React from "react";
import Section from "../components/Section";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "../components/Link";
import { MeetupIcon } from "../components/SocialLinks";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Hero = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h1" component="h1" fontWeight="bold">
            Inspire
            <Typography
              variant="h1"
              component="span"
              fontWeight="bold"
              color="secondary"
            >
              {" "}
              Change{" "}
            </Typography>
            By Leading The Way
          </Typography>
          <Typography
            variant="h6"
            component="div"
            color="text.secondary"
            gutterBottom
          >
            Tampa Volunteers is dedicated to building a stronger community
            through volunteerism
          </Typography>
          <Box display="flex" gap={2}>
            <Button
              endIcon={<MeetupIcon />}
              variant="contained"
              component={Link}
              href="https://meetu.ps/c/521Cz/H7wgF/a"
              target="_blank"
              rel="noopener"
              disableElevation
            >
              Join on Meetup
            </Button>
            <Button
              endIcon={<FavoriteIcon />}
              variant="outlined"
              component={Link}
              href="https://www.meetup.com/tampa-volunteers/#pledge"
              target="_blank"
              rel="noopener"
              disableElevation
            >
              Donate
            </Button>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default Hero;
