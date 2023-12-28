import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import two from "../assets/videos/2states.mp4"
function Twostates(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={two} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>2 states</h1>
            <p>2 States is a 2014 Indian Hindi-language romantic comedy-drama film directed by Abhishek Varman and produced by Karan Johar and Sajid Nadiadwala.[3] Based on Chetan Bhagat's 2009 novel of the same name with story written by Varman and Bhagat,
            </p>
            <h2>Year : 2014</h2>
            <p>Genre : drama romance</p>
        </div>
    )
}
export default Twostates;