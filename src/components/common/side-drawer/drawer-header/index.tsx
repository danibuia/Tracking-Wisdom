// CustomAppBar.tsx
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled,} from "@mui/material/styles";

import Toolbar from "@mui/material/Toolbar";

interface CustomAppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<CustomAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomToolbar = styled(Toolbar)(({}) => ({
  paddingRight: 24, // keep right padding when drawer closed
}));

export { CustomAppBar, CustomToolbar };
