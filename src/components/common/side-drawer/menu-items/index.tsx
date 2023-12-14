// CustomListItems.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  WbSunnyOutlined as WbSunnyIcon,
  WbTwilightOutlined as WbTwilightIcon,
  DoneOutlineOutlined as DoneOutlineIcon,
  FormatListBulletedOutlined as FormatListBulletedIcon,
  EditCalendarOutlined as EditCalendarOutlinedIcon,
} from "@mui/icons-material";

interface CustomListItemProps {
  text: string;
  index: number;
  open: boolean;
  onClick: () => void;
  minutes: string;
  tasks: number;
}

const CustomListItem: React.FC<CustomListItemProps> = ({
  text,
  index,
  open,
  minutes,
  tasks,
}) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    // Assuming the index corresponds to the route path
    const routePaths = ["", "tomorrow", "this-week", "planned", "completed"];
    navigate(routePaths[index]);
  };

  return (
    <ListItem key={text} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={handleItemClick}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {index === 0 && <WbSunnyIcon />}
          {index === 1 && <WbTwilightIcon />}
          {index === 2 && <EditCalendarOutlinedIcon />}
          {index === 3 && <FormatListBulletedIcon />}
          {index === 4 && <DoneOutlineIcon />}
        </ListItemIcon>
        <ListItemText
          primary={text}
          secondary={`${minutes} (${tasks})`}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            opacity: open ? 1 : 0,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
