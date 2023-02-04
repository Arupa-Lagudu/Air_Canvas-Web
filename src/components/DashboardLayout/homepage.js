import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import canva from "../../images/canva.png"
import {useNavigate } from "react-router-dom";

export default function HomePage(){

  const navigate = useNavigate()


  const StartairCanvas = () =>{
    console.log("checking button")
      navigate('/air-canvas')
  }


  return(
    <Box style={{backgroundColor:"#d2d2da"}}>
      <Grid container sx={{flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              backgroundColor:"#d2d2da",
              mt: 5}}>
        <Grid sm={12}
        sx={{display: "flex",
          justifyContent: "center",
          mb: 1}} >
          <Typography component='h5' fontSize={30} mb={3}>
            <span style={{fontFamily: 'cursive'}}>A New way of</span>
            <b style={{color: "#1976d2", fontSize: '40px', fontFamily: 'cursive'}}> Presentation..!</b>
          </Typography>
        </Grid>
        <Grid sm={5}  sx={{textAlign: 'center', mb: 3}}>
        <Typography component='body' fontSize={18} mb={5}><b style={{ fontSize: '20px', color: '#0003ffe0',fontFamily: 'cursive'}}>Canva.ai</b> 
        <span style={{fontFamily: 'emoji'}}> is a hands-free digital drawing canvas that utilizes 
          a Camera, and OpenCV to recognize and map hand gestures onto a PiTFT screen.</span>
        </Typography>
        <Button
          variant="contained"          
          style={{width:'150px',fontSize:'15px',backgroundColor: 'rgb(44 61 204 / 47%)', marginRight: '50px', marginBottom: '10px', fontFamily: 'emoji'}}  

          onClick={()=>{StartairCanvas()}}
        >
            Get Started
        </Button>
        <Button
          variant="contained"          
          style={{width:'150px',fontSize:'15px',backgroundColor: 'rgb(255 24 95 / 36%)', marginRight: '50px', marginBottom: '10px', fontFamily: 'emoji'}}  

          onClick={()=>{}}
        >
            Learn more
        </Button>

        </Grid>
        <img src={canva} alt="" />
      </Grid>
    </Box>
  );
}