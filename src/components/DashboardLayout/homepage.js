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
              mt: 15}}>
        <Grid sm={12}
        sx={{display: "flex",
          justifyContent: "center",
          mb: 5}} >
          <Typography component='h5' fontSize={25}>
            A New way of
            <b style={{color: "#1976d2", fontSize: '30px'}}> Presentation..!</b>
          </Typography>
        </Grid>
        <Grid sm={5}  sx={{textAlign: 'center'}}>
        <p>Air Canvas is a hands-free digital drawing canvas that utilizes a Raspberry Pi, 
          a PiCamera, and OpenCV to recognize and map hand gestures onto a PiTFT screen.</p>

          <Button
          variant="contained"          
          sx={{width:'200px',fontSize:'17px',boxShadow:'0px 0px 24px 3px grey',marginTop:'20px'}}  
          color='success'

          onClick={()=>{StartairCanvas()}}
        >
            Get Started
        </Button>

        </Grid>
        <img src={canva} alt="" />
      </Grid>
    </Box>
  );
}