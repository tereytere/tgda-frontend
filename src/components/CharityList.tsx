import React from "react";
import { ListItemButton, ListItemText, ListItemIcon, Link } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

interface CharityItemProps {
  name: string;
  url: string;
}

const CharityItem: React.FC<CharityItemProps> = ({ name, url }) => {
  return (
    <ListItemButton component={Link} href={url} target="_blank">
      <ListItemText primary={name} />
      <ListItemIcon>
        <PublicIcon color="inherit" />
      </ListItemIcon>
    </ListItemButton>
  );
};

export default CharityItem;
