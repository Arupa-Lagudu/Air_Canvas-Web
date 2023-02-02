import { BorderColor } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react"
import ApiService from "../../app.services"

export default function AirCanvas(){
    const [canvas, setCanvas] = useState();

    const StartairCanvas = () =>{
        ApiService.airCanvas().then(
            response =>{
                console.log(response.data.path);
                setCanvas(response.data.path);
            },
            err =>{
                console.log(err.response);
            }
        )
      }

    return(
        <Grid container sx={{paddingLeft:15,flexGrow: 1,
            display: "flex",
            flexDirection:'column',
            justifyContent: "flex-start",backgroundColor:'#d2d2da'}}
        >
        <Grid sm={6}
          sx={{display: "flex",
          justifyContent: "center",
          mb:5 }}>
          {/* <Typography component="h6"> Start the Air Canvas Demo!!!!</Typography> */}
        </Grid>
        <img src={canvas} width="50%" height={'550px'}/>
        <Grid item width={'50%'}  my={8}>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
        <Button 
          variant="contained" 
          sx={{width:'200px',fontSize:'17px',boxShadow:'0px 0px 24px 3px grey'}}  
          color='success'
          onClick={()=>{StartairCanvas()}}
        >
            Get Started
        </Button>
        <Button variant="contained"  box sx={{width:'200px',fontSize:'16px',boxShadow:'9'}} color='info'>
            Save Data
        </Button>
        {/* <Button variant="contained" box sx={{width:'200px',fontSize:'17px',boxShadow:'9'}} color='error'>
            Clear
        </Button> */}
        </Box>
        </Grid>

          {/* <iframe style= {{border: "2px solid #4593c6"}} title="canvas" src= {canvas} height="500" width="1000" />      */}
        </Grid>
    );
}