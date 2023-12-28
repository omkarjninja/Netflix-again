import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import aqua from "../assets/videos/Aquaman.mp4"
function Aquaman(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={aqua} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Aquaman</h1>
            <p>Arthur must enlist the help of his half-brother Orm in order to protect Atlantis against Black Manta, who has unleashed a devastating weapon in his obsessive quest to avenge his father's death.
            </p>
            <h2>Year : 2023</h2>
            <p>Genre : action adventure</p>
        </div>
    )
}
export default Aquaman;