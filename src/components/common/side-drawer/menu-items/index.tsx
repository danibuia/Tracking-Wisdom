// MenuItems.tsx
import { FC } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

export interface MenuItem {
  title: string;
  icon: string;
  type: string;
  url: string;
  duration: string;
  tasks: string;
}

interface MenuItemsProps {
  menuItems: MenuItem[];
}

const MenuItems: FC<MenuItemsProps> = ({ menuItems }) => {
  const navigate = useNavigate();

  return (
    <List sx={{ overflow: "hidden", pt: 0 }}>
      {menuItems.map((item) => (
        <ListItem
          key={item.title}
          disablePadding
          onClick={() => item.url && navigate(item.url)}
        >
          <ListItemButton
            disableRipple
            sx={{ minHeight: 40, justifyContent: "initial", px: 2.5 }}
          >
            <ListItemIcon>
              <Icon color="#fff" icon={item.icon} />
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              sx={{ opacity: 1, color: "#fff" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuItems;
