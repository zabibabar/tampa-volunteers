import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import events from "../events";
import Link from "../components/Link";
import { MeetupIcon } from "../components/SocialLinks";
import Section from "../components/Section";
import { Box, Chip, Grid } from "@mui/material";
import Image from "next/image";

export default function Events() {
  const meetupEvents = events;

  return (
    <Section
      id="events"
      bgcolor="white"
      title="Our Events"
      subTitle="Come Join Us"
    >
      <Grid container spacing={{ xs: 8, lg: 4 }}>
        {meetupEvents.map(
          ({ name, image, meetupLink, date, org, cause }, index) => (
            <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
              <Box
                display="flex"
                flexDirection="column"
                width="100%"
                height="100%"
                overflow="hidden"
                sx={{
                  "&:hover": {
                    boxShadow: 2,
                    borderRadius: 2,
                  },
                }}
              >
                <Box
                  width="100%"
                  height={200}
                  position="relative"
                  borderRadius={2}
                  overflow="hidden"
                >
                  <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <Box p={2} flexGrow={1}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      component="div"
                      variant="subtitle2"
                      color="secondary"
                    >
                      {date}
                    </Typography>
                    <Chip
                      label={cause}
                      size="small"
                      sx={{ bgcolor: "primary.light" }}
                    />
                  </Box>
                  <Typography gutterBottom variant="h6" component="div">
                    {name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {org}
                  </Typography>
                </Box>
                <Box pb={2} px={2}>
                  <Button
                    size="small"
                    endIcon={<MeetupIcon />}
                    component={Link}
                    variant="text"
                    href={meetupLink}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      color: "text.primary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    RSVP on Meetup
                  </Button>
                </Box>
              </Box>
            </Grid>
          )
        )}
      </Grid>

      <Box mt={4} textAlign="center">
        <Button
          endIcon={<MeetupIcon />}
          component={Link}
          variant="outlined"
          href="https://meetu.ps/c/521Cz/H7wgF/a"
          target="_blank"
          rel="noopener"
        >
          More Events
        </Button>
      </Box>
    </Section>
  );
}
