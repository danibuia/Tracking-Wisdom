import { Box } from "@mui/material";
import { FC } from "react";
import LogoImg from "../../../assets/logo.png"

interface LogoProps {
  width?: string;
}

const Logo: FC<LogoProps> = ({ width }) => (
  <Box component="img" sx={{ width, maxHeightheight: "auto" }} src={LogoImg} />
);

Logo.defaultProps = {
  width: "100%",
};

export default Logo;
