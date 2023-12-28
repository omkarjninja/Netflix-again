import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import kick from "../assets/videos/Kick.mp4"
function Kick(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={kick} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Kick</h1>
            <p>Kick is a 2014 Indian Hindi-language action comedy film produced and directed by Sajid Nadiadwala in his directorial debut under the Nadiadwala Grandson Entertainment banner and starring Salman Khan, Jacqueline Fernandez, Randeep Hooda and Nawazuddin Siddiqui in the lead roles.[4] An official remake of the eponymous 2009 Telugu original
            </p>
            <h2>Year : 2014</h2>
            <p>Genre : drama romance</p>
        </div>
    )
}
export default Kick;