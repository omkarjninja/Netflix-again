import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import dis from "../assets/videos/Discovery.mp4"
function Discovery(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={dis} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>The Discovery</h1>
            <p>Two years after the afterlife is scientifically proven, a man attempts to help a young woman break away from her dark past.
            </p>
            <h2>Year : 2017</h2>
            <p>Genre : romance sci-fi</p>
        </div>
    )
}
export default Discovery;