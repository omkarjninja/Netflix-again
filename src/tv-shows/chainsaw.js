import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import chain from "../assets/videos/chainsaw.mp4"
function Chainsawman(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={chain} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Chainsawman</h1>
            <p>Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.
            </p>
            <h2>Year : 2022</h2>
            <p>Genre : action ecchi mystery</p>
        </div>
    )
}
export default Chainsawman;