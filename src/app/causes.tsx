import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import ForestIcon from "@mui/icons-material/Forest";
import PetsIcon from "@mui/icons-material/Pets";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import StrollerIcon from "@mui/icons-material/Stroller";
import PaletteIcon from "@mui/icons-material/Palette";

export type Cause = {
  name: CauseName;
  icon: JSX.Element;
  description: string;
};

export type CauseName =
  | "Hunger & Poverty"
  | "Environmental"
  | "Animal & Wildlife"
  | "Health & Disease"
  | "Children & Youth"
  | "Arts & Culture";

const causes: Cause[] = [
  {
    name: "Hunger & Poverty",
    icon: <SoupKitchenIcon sx={{ height: 64, width: 64 }} />,
    description:
      "Help make the world a better place for impoverished communities.",
  },
  {
    name: "Environmental",
    icon: <ForestIcon sx={{ height: 64, width: 64 }} />,
    description: "Help protect the environment and stop climate change.",
  },
  {
    name: "Animal & Wildlife",
    icon: <PetsIcon sx={{ height: 64, width: 64 }} />,
    description: "Help provide care to animals in need.",
  },
  {
    name: "Health & Disease",
    icon: <HealthAndSafetyIcon sx={{ height: 64, width: 64 }} />,
    description:
      "Promote awareness, inclusion, and support for those health issues.",
  },
  {
    name: "Children & Youth",
    icon: <StrollerIcon sx={{ height: 64, width: 64 }} />,
    description:
      "Enable children to grow and develop in a nurturing and supportive environment",
  },
  {
    name: "Arts & Culture",
    icon: <PaletteIcon sx={{ height: 64, width: 64 }} />,
    description:
      "Connect people with art through community-oriented art and art education",
  },
];

export default causes;
