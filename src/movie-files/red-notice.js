import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import red from "../assets/videos/red.mp4"
function RedNotice(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={red} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Red Notice</h1>
            <p>Red Notice is a 2021 American action comedy film written and directed by Rawson Marshall Thurber starring Dwayne Johnson alongside Ryan Reynolds, Gal Gadot and Ritu Arya. It marks the third collaboration between Thurber and Johnson, following Central Intelligence (2016) and Skyscraper (2018). In the film, an FBI agent reluctantly teams up with a renowned art thief in order to catch an even more notorious thief.
            </p>
            <h2>Year : 2021</h2>
            <p>Genre : comedy action</p>
        </div>
    )
}
export default RedNotice;