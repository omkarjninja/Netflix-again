import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import dept from "../assets/videos/departed.mp4"
function Departed(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={dept} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>The Departed</h1>
            <p>1961. A small town Strunevo behind 101-st kilometer. In contrast to the neighboring cities and villages, the crimes here do not happen often, but - crime disclosing is one of the best in the USSR.
            </p>
            <h2>Year : 2017</h2>
            <p>Genre : drama mystery thriller</p>
        </div>
    )
}
export default Departed;