import { ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import PaddingOutlinedIcon from '@mui/icons-material/PaddingOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';


export default function SideMenu() {
  return (
    <div>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <ListItem button key="Environments">
          <Tooltip title="Environments" placement="top-end" arrow>
            <ListItemIcon>
              <PaddingOutlinedIcon />
            </ListItemIcon>
          </Tooltip>
          <ListItemText primary="Environments" color="white" />
        </ListItem>
      </NavLink>
      <NavLink to="/entities" style={{ textDecoration: "none" }}>
        <ListItem button key="Entities">
          <Tooltip title="Entities" placement="top-end" arrow>
            <ListItemIcon>
              <BackupTableOutlinedIcon />
            </ListItemIcon>
          </Tooltip>
          <ListItemText primary="Entities" color="white" />
        </ListItem>
      </NavLink>
      <NavLink to="/etl" style={{ textDecoration: "none" }}>
        <ListItem button key="ETL">
          <Tooltip title="ETL" placement="top-end" arrow>
            <ListItemIcon>
              <AnalyticsOutlinedIcon />
            </ListItemIcon>
          </Tooltip>
          <ListItemText primary="ETL" color="white" />
        </ListItem>
      </NavLink>


    </div>
  );
}
