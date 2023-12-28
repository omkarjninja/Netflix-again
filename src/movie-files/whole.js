import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import hole from "../assets/videos/hole.mp4"
function TheWholeTruth(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={hole} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>The Whole Truth</h1>
            <p>When two siblings stumble on a strange hole in the wall of their grandparents' house, horrifying incidents reveal sinister secrets about their family.
            </p>
            <h2>Year : 2021</h2>
            <p>Genre : drama horror mystery</p>
        </div>
    )
}
export default TheWholeTruth;