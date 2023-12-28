import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import aot from "../assets/videos/aot.mp4"
function AttackonTitan(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={aot} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Attack on Titan</h1>
            <p>After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.
            </p>
            <h2>Year : 2013</h2>
            <p>Genre : action adventure mystery</p>
        </div>
    )
}
export default AttackonTitan;