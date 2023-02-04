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
    // <div role="presentation" className='header-container'>
      <Box sx={{ display: 'flex',flexDirection:'row', alignItems: 'center', justifyContent:'center',width:'100%', columnGap: 5}}>
        <Link id="link" style={{fontSize:"18px",'&:hover':{color:'green'},color:routes ==="/" ? 'rgb(44 177 204)' :'white',textDecoration:'none'}}  to={'/'}>Home</Link>  
        <Link id="link" to="/air-canvas" style={{fontSize:"18px",color:routes ==="/air-canvas"?'rgb(44 177 204)':'white',textDecoration:'none'}} > Air Canvasing </Link>
        <Link id="link" to="/about" style={{fontSize:"18px",color:routes ==="/about"?'rgb(44 177 204)':'white',textDecoration:'none'}} > About </Link>

      </Box>
    // </div>
  );
}