import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import punk from "../assets/videos/cyber.mp4"
function CyberPunk(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={punk} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>CyberPunk</h1>
            <p>A Street Kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an Edgerunner, a Mercenary outlaw also known as a Cyberpunk.
            </p>
            <h2>Year : 2022</h2>
            <p>Genre : action adventure</p>
        </div>
    )
}
export default CyberPunk;