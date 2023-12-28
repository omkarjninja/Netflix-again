import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import rock from "../assets/videos/Rockstar.mp4"
function Rockstar(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={rock} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Rockstar</h1>
            <p>Rockstar is a 2011 Indian Hindi-language musical romantic drama film written and directed by Imtiaz Ali. The film stars Ranbir Kapoor and Nargis Fakhri with Moufid Aziz, Aditi Rao Hydari, Piyush Mishra, Shernaz Patel, Kumud Mishra and Shammi Kapoor in supporting roles. The soundtrack was composed by A. R. Rahman. It marks the posthumous film appearance of Shammi Kapoor, following his death on 14 August 2011.
            </p>
            <h2>Year : 2011</h2>
            <p>Genre : drama music romance</p>
        </div>
    )
}
export default Rockstar;