import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import jai from "../assets/videos/Jaiho.mp4"
function Jai(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={jai} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Jai Ho</h1>
            <p>Jai Ho (transl. Let there be Victory) is a 2014 Indian Hindi-language socio-political action drama film directed by Sohail Khan, who also produced the film under the banner Sohail Khan Productions, and co-produced by Sunil Lulla of Eros International, which distributed the film.
            </p>
            <h2>Year : 2014</h2>
            <p>Genre : drama </p>
        </div>
    )
}
export default Jai;