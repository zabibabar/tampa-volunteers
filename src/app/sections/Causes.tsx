import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Section from "../components/Section";
import causes from "../causes";

export default function Causes() {
  return (
    <Section id="causes" title="Causes" subTitle="Allocate Your Help To">
      <Grid container spacing={8}>
        {causes.map(({ icon, name, description }, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              px={2}
            >
              <Box bgcolor="primary.light" borderRadius={2} p={4} mb={5}>
                {icon}
              </Box>
              <Typography mb={2} variant="h6" component="div" fontWeight="bold">
                {name}
              </Typography>
              <Typography color="text.secondary" textAlign="center">
                {description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
