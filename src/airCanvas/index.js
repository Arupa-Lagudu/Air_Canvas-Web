import { Box } from "@mui/material";
import { useState, useEffect } from "react"
import ApiService from "../app.services";
import "./index.css"

export default function AirCanvas() {
    const [canvas, setCanvas] = useState();

    // useEffect(() => {
    //     ApiService.airCanvas().then(
    //         response => {
    //             console.log(response.data.path, "path");
    //             setCanvas(response.data.path);
    //         },
    //         err => {
    //             console.log(err.response);
    //         }
    //     )
    // }, [])

    const stream = () => {
        ApiService.airCanvas().then(
            response => {
                console.log(response.data.path, "path");
                setCanvas(response.data.path);
            },
            err => {
                console.log(err.response);
            }
        )
    }

    return (
        <div>

            <h1 id="demo">Live streaming</h1>

            <div>
                <img src={canvas} class='white-board' />
                {/* <div class="white-board" ></div> */}
            </div>
            <div id="the_canvas_element_id" class="bottom-container" >
                <button class="screenshot-btn stream-btn" onClick={stream}>Stream </button>

                <button class="screenshot-btn" >Take Screenshot</button>
                <button class="clear-btn">Clear</button>


            </div>
        </div>
    );
}

// <Box id="contentframe" >
        //     <h1>Live streaming</h1>
        //     <h1>fdhgfhwqewqq</h1>
        //     {/* <iframe title="canvas" src={canvas} height="500" width="100%" frameBorder="0"/>   */}
        //     <img src={canvas} width="60%" />


        // </Box>