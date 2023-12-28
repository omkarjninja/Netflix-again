import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import goose from "../assets/videos/Goosebumps.mp4"
function Goosebumps(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={goose} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Goosebumps</h1>
            <p>A group of five high schoolers unleash supernatural forces upon their town, now they must work together in order to save it.
            </p>
            <h2>Year : 2023</h2>
            <p>Genre : thriller mystery</p>
        </div>
    )
}
export default Goosebumps;