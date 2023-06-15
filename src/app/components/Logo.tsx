import { Icon, SvgIconTypeMap } from "@mui/material";
import Image from "next/image";

const Logo = (props: SvgIconTypeMap<{}, "svg">["props"]) => {
  return (
    <Icon {...props}>
      <Image src="logo.svg" alt="Tampa Volunteers Logo" fill />
    </Icon>
  );
};

export default Logo;
