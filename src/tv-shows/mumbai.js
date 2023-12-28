import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import mum from "../assets/videos/mumbai.mp4"
function Mumbai(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={mum} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Mumbai Saga</h1>
            <p>The plot of the movie is set in the era of the 80s and 90s which were marked as a transformed period of Mumbai.
            </p>
            <h2>Year : 2021</h2>
            <p>Genre : action drama</p>
        </div>
    )
}
export default Mumbai;