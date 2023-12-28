import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import war from "../assets/videos/War.mp4"
function War(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={war} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>War</h1>
            <p>War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Anand, Aditya Chopra, Shridhar Raghavan and Abbas Tyrewala. Produced by Yash Raj Films, the film is the third installment in the YRF Spy Universe. It stars Hrithik Roshan and Tiger Shroff in lead roles with Vaani Kapoor, Ashutosh Rana and Anupriya Goenka playing supporting roles.[5] In the film, Khalid Rahmani (Shroff), an Indian soldier who works for RAW, is assigned to eliminate his former mentor Kabir Dhaliwal (Roshan), who has gone rogue.[6]
            </p>
            <h2>Year : 2019</h2>
            <p>Genre : action drama</p>
        </div>
    )
}
export default War;