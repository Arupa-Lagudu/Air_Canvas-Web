import { Box } from "@mui/material";
import { useState, useEffect } from "react"
import ApiService from "../../app.services"

export default function AirCanvas(){
    const [canvas, setCanvas] = useState();

    useEffect(() =>{
        ApiService.airCanvas().then(
            response =>{
                console.log(response.data.path);
                setCanvas(response.data.path);
            },
            err =>{
                console.log(err.response);
            }
        )
      },[])

    return(
        <Box id="contentframe" 
          sx={{backgroundColor: "#000", 
          py: 10,
          }}>
            <iframe title="canvas" src={canvas} height="500" width="700" frameBorder="0"/>     
        </Box>
    );
}