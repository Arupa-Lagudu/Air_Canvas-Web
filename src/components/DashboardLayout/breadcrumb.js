import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, a, Link } from "react-router-dom";
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import "./breadcrumb.css"


export default function IconBreadcrumbs() {
  const routes = useLocation().pathname
  return (
      <Box sx={{ display: 'flex',flexDirection:'row', alignItems: 'center', justifyContent:'end',width:'100%', columnGap: 8, marginRight: 6}}>
        <Link id="link" style={{fontSize:"18px", fontFamily: 'auto' ,'&:hover':{color:'green'},color:routes ==="/" ? 'rgb(44 177 204)' :'white',textDecoration:'none'}}  to={'/'}>Home</Link>  
        <Link id="link" to="/air-canvas" style={{fontSize:"18px", fontFamily: 'auto', color:routes ==="/air-canvas"?'rgb(44 177 204)':'white',textDecoration:'none'}} > Air Canvasing </Link>
        <Link id="link" to="/" style={{fontSize:"18px", fontFamily: 'auto', color:routes ==="/about"?'rgb(44 177 204)':'white',textDecoration:'none'}} > About </Link>

      </Box>
  );
}