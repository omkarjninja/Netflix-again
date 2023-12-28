import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import nar from "../assets/videos/naruto.mp4"
function Naruto(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={nar} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Naruto</h1>
            <p>Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.
            </p>
            <h2>Year : 2004</h2>
            <p>Genre : action adventure</p>
        </div>
    )
}
export default Naruto;