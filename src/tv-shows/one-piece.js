import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import one from "../assets/videos/one.mp4"
function Onepiece(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={one} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>One piece</h1>
            <p>Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece"
            </p>
            <h2>Year : 2000</h2>
            <p>Genre : adventure comedy anime</p>
        </div>
    )
}
export default Onepiece;