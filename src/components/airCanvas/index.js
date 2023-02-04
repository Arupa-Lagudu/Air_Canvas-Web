import { Box, Button, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState} from "react"
import ApiService from "../../app.services"
import Loading from "../loader";

export default function AirCanvas(){
    const [canvas, setCanvas] = useState();
    const[load, setLoad] = useState(false);

    const StartairCanvas = () =>{
        setLoad(true);
        ApiService.airCanvas().then(
            response =>{
                console.log(response.data.path);
                setCanvas(response.data.path);
                setLoad(false);
            },
            err =>{
                console.log(err.response);
                setLoad(false);
            }
        )
      }

    return(
        <Grid container 
        sx={{backgroundColor:'#d2d2da'}}
        >
        {!canvas ? 
        <Grid sm={12} sx={{display: 'flex', justifyContent: 'center', mt: 20}}>
        <Box style={{display: 'flex', justifyContent: 'center', width: '200px', height: '200px', backgroundColor: "#a9a9a9", borderRadius: '100%'}}>
          <Button 
          variant="contained" 
          style={{width: '150px', height: '150px', fontSize:'15px',backgroundColor: 'rgb(44 61 204 / 47%', fontFamily: 'emoji', borderRadius: '100%', marginTop: '25px'}}  
          onClick={()=>{StartairCanvas()}}
        >
            Start Canvasing
        </Button>
        </Box>
        </Grid>
        :
        <>
        {load ? <Loading /> : <>
        <Grid sm={7}
          sx={{display: "flex", justifyContent: "center", mb:5,mt: 5 }}>
          <img src={canvas} height={'550px'}/>
        </Grid>
        <Grid  sm={5} sx={{display: "flex", justifyContent: 'center', paddingY: 18}}>
        <Box sx={{display: "flex", flexDirection: 'column', justifyContent: 'space-evenly', mr: 20}}>
        <Button variant="contained" style={{width: '175px', fontSize:'15px',backgroundColor: '#026cd1ad', fontFamily: 'emoji'}}>
            Save Data
        </Button>
        <Button 
          variant="contained" style={{width: '175px', fontSize:'15px',backgroundColor: 'rgb(209 97 2 / 62%)', fontFamily: 'emoji'}}
        //   onClick={()=>{}}
          >
            End Session
        </Button>
        </Box>
        </Grid>
        </>}
        </>
        }
        </Grid>
    );
}