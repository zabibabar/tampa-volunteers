import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Section from "../components/Section";
import organizations from "../organizations";
import Link from "../components/Link";

export default function Organizations() {
  return (
    <Section title="Organizations We Support" subTitle="Collaborate With Us">
      <Grid container spacing={{ xs: 4 }}>
        {organizations.map(({ name, logo }, index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <Box
              p={2}
              display="flex"
              justifyContent="center"
              borderRadius={2}
              sx={{ backgroundColor: "white" }}
            >
              <Box
                height={96}
                width={168}
                position="relative"
                overflow="hidden"
              >
                <Image
                  src={logo}
                  alt={`${name} Logo`}
                  fill={true}
                  style={{ objectFit: "contain" }}
                ></Image>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography mt={12} mb={3} variant="h3" fontWeight="medium">
          Need Volunteers For Your Events?
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          href="/contact"
          disableElevation
        >
          Contact Us
        </Button>
      </Box>
    </Section>
  );
}
