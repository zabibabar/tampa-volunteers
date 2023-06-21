import * as React from "react";
import {
  Box,
  BoxProps,
  Breakpoint,
  Container,
  Typography,
} from "@mui/material";

type SectionProps = {
  title?: string;
  subTitle?: string;
  maxWidth?: Breakpoint;
} & BoxProps;

const Section = ({
  children,
  title,
  subTitle,
  maxWidth,
  ...props
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <Box component="section" sx={{ py: 16 }} {...props}>
      <Container maxWidth={maxWidth ?? "xl"}>
        {title && (
          <Typography
            textAlign="center"
            color="secondary"
            fontWeight="medium"
            mb={!subTitle ? 12 : 2}
          >
            {title.toUpperCase()}
          </Typography>
        )}
        {subTitle && (
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            fontWeight="medium"
            mb={12}
          >
            {subTitle}
          </Typography>
        )}
        <Box component="div">
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default Section;
