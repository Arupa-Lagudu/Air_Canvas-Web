import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, Link } from "react-router-dom";
import { Box } from '@mui/system';


export default function IconBreadcrumbs() {
  const routes = useLocation().pathname.split("/").slice(1);
  return (
    <div role="presentation">
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 5}}>
        <Link to="/" > Home </Link>
        <Link to="/air-canvas" > Air Canvasing </Link>
        <Link to="/point-canvas" > Pointer Canvasing </Link>
        <Link to="/NLP" > NLP </Link>
        <Link to="/about" > About </Link>

      </Box>
    </div>
  );
}