import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, Rating, styled } from "@mui/material";
import Section from "../components/Section";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Link from "../components/Link";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: theme.palette.primary.main,
  },
}));

export default function About() {
  return (
    <Section
      id="about"
      bgcolor="white"
      maxWidth="lg"
      title="We Are"
      subTitle="Tampa Volunteers"
    >
      <Typography mb={16} variant="h5" component="div" textAlign="center">
        Tampa Volunteers was founded by{" "}
        <Link
          href="https://zabibabar.com/?utm_source=TampaVolunteers&utm_medium=about"
          color="secondary"
        >
          Zabi Babar
        </Link>{" "}
        in January 2023 to share his passion for volunteering with other Tampa
        Bay residents. Zabi had been volunteering with local non-profits in
        Tampa Bay throughout college and after graduating and found out that it
        was a great way to give back to the community and to make new friends.
        Tampa Volunteers has grown rapidly since its inception and has several
        events throughout the month.
      </Typography>
      <Grid container spacing={{ xs: 8, lg: 4 }}>
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography mb={2} variant="h2" component="div" fontWeight="bold">
              500+
            </Typography>
            <Typography color="text.secondary" textAlign="center">
              Members and Counting
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ mt: { sm: "-30px" } }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <StyledRating
              size="large"
              readOnly
              defaultValue={4.9}
              precision={0.1}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
            <Typography mb={2} variant="h2" component="div" fontWeight="bold">
              4.9
            </Typography>
            <Typography color="text.secondary" textAlign="center">
              Stars on Meetup
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography mb={2} variant="h2" component="div" fontWeight="bold">
              2023
            </Typography>
            <Typography color="text.secondary" textAlign="center">
              The Year We Started
            </Typography>
          </Box>
        </Grid>

        {/* <Grid item xs={12} sm={6} lg={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography mb={2} variant="h2" component="div" fontWeight="bold">
              15+
            </Typography>
            <Typography color="text.secondary" textAlign="center">
              Organizations We Have Collaborated With
            </Typography>
          </Box>
        </Grid> */}
      </Grid>
    </Section>
  );
}
