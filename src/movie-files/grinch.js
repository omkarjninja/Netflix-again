import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import grinch from "../assets/videos/Grinch.mp4"
function Grinch(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={grinch} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>The Grinch</h1>
            <p>A grumpy Grinch plots to ruin Christmas for the village of Whoville.
            </p>
            <h2>Year : 2018</h2>
            <p>Genre : comedy family animation </p>
        </div>
    )
}
export default Grinch;