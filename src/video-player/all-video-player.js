import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import bb from "../assets/videos/dhindora.mp4"
function Dhindora(){
    const abc=bb;
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={abc} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Dhindora - BB ka Vines</h1>
            <p>Dhindora is a 10 episode weries created by a popular youtuber bhuvan bam , 
                here the father win a 11 crore lottery and meets with a accident
                Dhindora is a 10 episode weries created by a popular youtuber bhuvan bam , 
                here the father win a 11 crore lottery and meets with a accident</p>
            <h2>Year : 2021</h2>
            <p>Genre : comedy thriller</p>
        </div>
    )
}
export default Dhindora;