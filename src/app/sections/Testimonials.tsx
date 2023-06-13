import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Section from "../components/Section";
import testimonials from "../testimonials";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      bgcolor="white"
      title="Testimonials"
      subTitle="What People Are Saying"
    >
      <Grid container spacing={8}>
        {testimonials.map(({ name, title, message }, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4}>
            <Box
              display="flex"
              flexDirection="column"
              bgcolor="secondary.light"
              p={5}
              borderRadius={2}
            >
              <FormatQuoteIcon
                color="primary"
                sx={{ alignSelf: "center", width: 64, height: 64, mb: 2 }}
              />
              <Typography>{message}</Typography>
              <Typography mt={5} color="secondary" fontWeight="medium">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
