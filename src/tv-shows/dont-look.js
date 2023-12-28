import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import dont from "../assets/videos/dont.mp4"
function DontLook(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={dont} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Dont Look Up</h1>
            <p>Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.
            </p>
            <h2>Year : 2021</h2>
            <p>Genre : comedy drama sci-fi</p>
        </div>
    )
}
export default DontLook;