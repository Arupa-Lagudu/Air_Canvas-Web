import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import canva from "../../images/canva.png"

export default function HomePage(){
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
            <Typography component='h1' fontSize={50}></Typography>
          </Grid>
        <Grid sm={12}
        sx={{display: "flex",
          justifyContent: "center",
          mb: 5}} >
          <Typography component='h5' fontSize={25}>
            A New way of
            <b style={{color: "#1976d2", fontSize: '30px'}}> Presentation..!</b>
          </Typography>
        </Grid>
        <Grid sm={5} sx={{textAlign: 'center'}}>
        <p>Canva.ai is a hands-free digital drawing canvas that utilizes 
          a Camera, and OpenCV to recognize and map hand gestures onto a PiTFT screen.</p>
        </Grid>
        <img src={canva} alt="" />
      </Grid>
    </Box>
  );
}