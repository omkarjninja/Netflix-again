import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import orange from "../assets/videos/orange.mp4"
function Orangeis(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={orange} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Orange Is the New Black</h1>
            <p>Convicted of a decade old crime of transporting drug money to an ex-girlfriend, normally law-abiding Piper Chapman is sentenced to a year and a half behind bars to face the reality of how life-changing prison can really be.
            </p>
            <h2>Year : 2013</h2>
            <p>Genre : comedy crime drama</p>
        </div>
    )
}
export default Orangeis;