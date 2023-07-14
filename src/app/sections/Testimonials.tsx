import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Section from "../components/Section";
import testimonials from "../testimonials";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Image from "next/image";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      bgcolor="white"
      title="Testimonials"
      subTitle="What People Are Saying"
    >
      <Grid container spacing={8}>
        {testimonials.map(({ name, title, picture, message }, index) => (
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
              <Box display="flex" alignItems="center" gap={2} mt={5}>
                <Box>
                  <Image
                    src={picture}
                    alt={`${name} picture`}
                    width={64}
                    height={64}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  ></Image>
                </Box>
                <Box>
                  <Typography color="secondary" fontWeight="medium">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
