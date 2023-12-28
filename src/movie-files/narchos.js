import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import narcho from "../assets/videos/narchos.mp4"
function Narchos(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={narcho} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Narchos</h1>
            <p>A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.
            </p>
            <h2>Year : 2016</h2>
            <p>Genre : drama crime</p>
        </div>
    )
}
export default Narchos;