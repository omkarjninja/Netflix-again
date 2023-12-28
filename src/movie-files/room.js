import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import room from "../assets/videos/Room.mp4"
function Room(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={room} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>The Room</h1>
            <p>A little boy is held captive in a room with his mother since his birth, so he has never known the world outside.
            </p>
            <h2>Year : 2015</h2>
            <p>Genre : thriller drama</p>
        </div>
    )
}
export default Room;