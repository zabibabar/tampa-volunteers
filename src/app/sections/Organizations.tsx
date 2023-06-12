import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Section from "../components/Section";
import organizations from "../organizations";

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
              borderRadius={1}
              sx={{ backgroundColor: "white" }}
            >
              <Box
                height={96}
                width={168}
                position="relative"
                overflow="hidden"
              >
                <Organization src={logo} alt={`${name} Logo`}></Organization>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

type OrganizationProps = {
  src: string;
  alt: string;
};

const Organization = ({ src, alt }: OrganizationProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
      style={{ objectFit: "contain" }}
    ></Image>
  );
};
