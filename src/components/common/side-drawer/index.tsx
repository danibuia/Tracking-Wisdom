import React from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const drawerWidth = 240;
const icons = [WbSunnyIcon, NextPlanIcon, ViewWeekIcon, EventAvailableIcon];

const DrawerItem = ({
  icon,
  text,
  to,
  color,
  specialColor,
}: {
  icon: React.ReactNode;
  text: string;
  to: string;
  color?: string;
  specialColor?: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <ListItem disablePadding onClick={handleClick}>
      <ListItemButton component={Link} to={to}>
        <ListItemIcon
          style={
            specialColor
              ? { color: specialColor }
              : color
              ? { color }
              : undefined
          }
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

const ClippedDrawer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Box sx={{ overflow: "auto" }}>
            <List>
              {["Today", "Tomorrow", "This Week", "Planned"].map(
                (text, index) => (
                  <DrawerItem
                    key={text}
                    icon={React.createElement(icons[index % icons.length])}
                    text={text}
                    color={index === 0 ? "#ffd166" : "#118ab2"}
                    to={""}
                  />
                )
              )}
            </List>
            <Divider />
            <DrawerItem
              icon={<DoneOutlineIcon />}
              text="Complete"
              to="/complete"
              specialColor="#06d6a0"
            />
          </Box>
          <Box sx={{ alignSelf: "center", pb: 2 }}>
            <Box
              sx={{
                dipslay: "flex",
                justifyContent: "",
                alignItems: "center",
                width: "fit-content",
                borderRadius: "20px",
                p: 2,
                border: "2px #fff solid",
              }}
            >
              dasda
            </Box>
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
};

export default ClippedDrawer;
