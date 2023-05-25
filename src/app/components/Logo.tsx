import { Icon, SvgIcon, SvgIconTypeMap } from "@mui/material";

const Logo = (props: SvgIconTypeMap<{}, "svg">["props"]) => {
  return (
    <Icon {...props}>
      <img src="logo.svg"></img>
    </Icon>
  );
};

export default Logo;
