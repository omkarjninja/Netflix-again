import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import forgive from "../assets/videos/Unforgivable.mp4"
function Unforgivable(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={forgive} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Unforgivable</h1>
            <p>A woman is released from prison after serving a sentence for a violent crime and re-enters a society that refuses to forgive her past.
            </p>
            <h2>Year : 2022</h2>
            <p>Genre : drama thriller</p>
        </div>
    )
}
export default Unforgivable;