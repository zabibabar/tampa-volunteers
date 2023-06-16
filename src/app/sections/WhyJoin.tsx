import * as React from "react";
import Typography from "@mui/material/Typography";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Box, Grid } from "@mui/material";
import Section from "../components/Section";

export default function WhyJoin() {
  return (
    <Section title="Why Join Us?" subTitle="Support Your Community">
      <Grid container spacing={8}>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center" px={2}>
            <Box bgcolor="#ffdcdc" borderRadius={2} p={4} mb={5}>
              <TagFacesIcon sx={{ height: 64, width: 64 }} />
            </Box>
            <Typography mb={2} variant="h6" component="div" fontWeight="bold">
              Give Happiness
            </Typography>
            <Typography color="text.secondary" textAlign="center">
              Giving happiness to others is one of the fulfilling things you can
              do in life.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center" px={2}>
            <Box bgcolor="#ffdcdc" borderRadius={2} p={4} mb={5}>
              <VolunteerActivismIcon sx={{ height: 64, width: 64 }} />
            </Box>
            <Typography mb={2} variant="h6" component="div" fontWeight="bold">
              Share Love
            </Typography>
            <Typography color="text.secondary" textAlign="center">
              When you share love with those in need, you create a ripple effect
              of kindness.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center" px={2}>
            <Box bgcolor="#ffdcdc" borderRadius={2} p={4} mb={5}>
              <Diversity3Icon sx={{ height: 64, width: 64 }} />
            </Box>
            <Typography mb={2} variant="h6" component="div" fontWeight="bold">
              Build Socially
            </Typography>
            <Typography color="text.secondary" textAlign="center">
              Building socially requires not just connecting with others, but
              also actively contributing.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
