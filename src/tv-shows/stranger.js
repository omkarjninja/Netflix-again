import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import strange from "../assets/videos/stranger.mp4"
function Stranger(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={strange} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Stranger Things</h1>
            <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
            </p>
            <h2>Year : 2016</h2>
            <p>Genre : drama fantasy</p>
        </div>
    )
}
export default Stranger;