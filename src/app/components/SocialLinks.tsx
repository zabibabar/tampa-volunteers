import { Box, SvgIcon } from "@mui/material";
import Link from "./Link";

export default function SocialLinks() {
  return (
    <Box display="flex" gap={2}>
      <SocialLink
        link="https://meetu.ps/c/521Cz/H7wgF/a"
        icon={<MeetupIcon />}
      ></SocialLink>
    </Box>
  );
}

type SocialLinkProps = {
  link: string;
  icon: JSX.Element;
};

const SocialLink = ({ link, icon }: SocialLinkProps) => {
  return (
    <Link
      sx={{
        height: 40,
        width: 40,
        borderRadius: "50%",
        border: "2px solid ",
        borderColor: "primary.contrastText",
        display: "flex",
        color: "primary.contrastText",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "secondary.contrastText",
          color: "secondary.main",
          borderColor: "secondary.main",
        },
      }}
      href={link}
      target="_blank"
      rel="noopener"
    >
      {icon}
    </Link>
  );
};

const MeetupIcon = () => {
  return (
    <SvgIcon>
      <path d="M6.9805.5547a.518.518 0 00-.1055.0117c-.2873.0619-.4704.3437-.4082.6309.0619.2868.344.47.6309.4082a.5327.5327 0 00.4082-.6328c-.0542-.251-.2782-.4206-.5254-.418zm6.455.6387a.9836.9836 0 00-.5136.1425c-.4698.2818-.6237.8898-.3418 1.3594.2822.4696.8919.6216 1.3613.3399.4698-.2821.6217-.8901.3399-1.3594a.9919.9919 0 00-.8458-.4824zm-3.0292 2.2363c-.9744.0047-1.9565.292-2.8204.8887-.8745.6041-1.4965 1.436-1.8476 2.3593-.5085.0689-1.0096.239-1.461.5508-1.4918 1.0307-1.886 3.0391-.9394 4.5625-1.2846 1.1762-1.5815 3.1356-.6055 4.6485.579.897 1.4882 1.437 2.4649 1.5976.018.732.238 1.466.6855 2.1133 1.224 1.7709 3.6526 2.2157 5.4238.9922.0677-.047.1198-.1061.1836-.1563.9872.8809 2.4708 1.0255 3.6075.2403.6065-.4189.9929-1.0292 1.162-1.6914.8895.0326 1.7956-.1935 2.584-.7383 1.8916-1.3067 2.3995-3.8615 1.1895-5.789.9713-.819 1.1798-2.2514.4336-3.3087-.3327-.4718-.8028-.7806-1.3164-.9336.0752-.984-.1704-1.9979-.7754-2.873-1.1792-1.7058-3.3327-2.3315-5.1953-1.6563a5.1058 5.1058 0 00-2.7735-.8066zm-5.6036.8164a.7589.7589 0 00-.4238.1348c-.3447.2383-.4317.7097-.1934 1.0546.2384.3447.7116.4317 1.0567.1934a.7574.7574 0 00.1933-1.0547.7581.7581 0 00-.6328-.3281zM20.797 6.617a.8419.8419 0 00-.4707.1505.8453.8453 0 101.1758.2148.8452.8452 0 00-.7051-.3652zm-8.1504 1.0274c.0629.0004.1244.0053.1816.0137.2286.0336.3655.119.4512.1875.1682.1342.2726.2412.4316.3926.2394.2275.4132.089.5332.0195.208-.1209.3692-.2181.9844-.207.6332.011 1.3626.2366 1.5137 1.3164.1682 1.1994-1.9656 4.2891-1.8164 5.7226.1054 1.0103 1.8146.2987 1.959 1.2207.1872 1.197-2.1353.752-2.666.4922-.832-.4077-1.337-1.3399-1.1211-2.2597.1612-.6882 1.7-3.4979 1.7578-3.9297.0587-.4404-.1773-.477-.3242-.4844-.1895-.0098-.3394.0808-.5254.3613-.1692.2558-2.082 4.0856-2.248 4.3985-.2969.5594-.6698.6938-1.045.6738-.5472-.0285-.7978-.3206-.7188-.8477.0467-.31 1.2594-3.0491 1.3223-3.4765.0387-.2643-.0132-.5452-.2754-.6797-.2625-.1346-.5713.0704-.664.2266-.128.2154-1.8482 4.7065-2.0313 5.039-.3168.576-.6508.7594-1.1523.7832-1.1862.0562-2.0656-.919-1.6778-2.1152.173-.5328 1.3159-4.5716 1.8946-5.5996C7.799 8.2015 8.8782 7.676 9.627 8c.3878.1679.9252.4377 1.084.5078.366.1622.7594-.2776.914-.4121.1549-.1345.3017-.2765.4902-.3574.1412-.0605.3426-.0947.5313-.0938zm10.8808 2.0567a.4683.4683 0 00-.0937.0117.4671.4671 0 00-.3594.5547.4696.4696 0 00.5567.3594c.2523-.0546.414-.3044.3593-.5567a.4696.4696 0 00-.4629-.3691zm-22.5195.8105a.9972.9972 0 00-.832.4336c-.3123.4553-.1977 1.0784.2578 1.3906.4555.3123 1.0783.1956 1.3906-.2597s.1977-1.0765-.2578-1.3887a.9992.9992 0 00-.5586-.1758zm21.295 2.0938a.635.635 0 00-.127.0136.6268.6268 0 00-.4805.7461.6278.6278 0 00.7461.4825c.3393-.0733.5558-.407.4824-.7461a.6295.6295 0 00-.621-.4961zM4.0624 18.703a.453.453 0 00-.0918.0117c-.2507.0543-.4117.3018-.3574.5528.054.251.302.4097.5527.3554a.4644.4644 0 00.3555-.5527.4655.4655 0 00-.459-.3672zm13.6758 1.5508a1.0444 1.0444 0 00-.584.1856c-.4758.3287-.5945.9813-.2656 1.457.3288.4756.9809.5943 1.457.2656.4758-.3287.5945-.9814.2656-1.457a1.0444 1.0444 0 00-.873-.4512zm-6.338 1.9004a.6427.6427 0 00-.3593.1152.6456.6456 0 00-.164.8985.6457.6457 0 00.8984.164.6456.6456 0 00.164-.8984.646.646 0 00-.539-.2793Z" />
    </SvgIcon>
  );
};
