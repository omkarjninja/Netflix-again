import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import waste from "../assets/videos/Wasteland.mp4"
function Wasteland(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={waste} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Wasteland</h1>
            <p>The tranquil lives of a family isolated from the rest of society are disturbed by a terrifying creature, testing the ties that bind them together.
            </p>
            <h2>Year : 2021</h2>
            <p>Genre : horror drama</p>
        </div>
    )
}
export default Wasteland;