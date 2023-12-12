import { FC } from "react";
import { Box, styled } from "@mui/material";

const Wrapper: FC = styled(Box as FC, {
  shouldForwardProp: (prop: string) => prop !== "isDrawerOpen",
})(({ theme }) => ({
  marginLeft: "64px",
  // padding: '30px',
  paddingTop: "94px",
  overflowY: "auto",
  width: "calc(100% - 64px)",
  height: "100%",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default Wrapper;
