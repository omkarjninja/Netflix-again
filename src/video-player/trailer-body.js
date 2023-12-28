import "./trailer-body.css"
import bb from "../assets/videos/dhindora.mp4"
import bbk from "../assets/images/title1.png"
import aud from "../assets/images/audio.png"
import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';

function TrailerBody(){
    
    return(
        <div>
                <div className="video-content">
                <Media>
  <Video loading="visible" controls preload="true">
  <video loop autoPlay muted>
       <source src={bb} type="video/mp4" muted />
</video>
  </Video>
</Media>
        {/* <video loop autoPlay className="vdo" src={bb} ></video> */}
        <img className="titles" src={bbk} alt="" srcset="" width="250px"></img>
        <p className="des">Dhindora is a 2021 Indian comedy drama web series<br /> created by Bhuvan Bam and directed by Himank Gaur.<br /> Bam plays multiple characters and<br /> the series also stars Gayatri Bhardwaj and Jeeveshu Ahluwalia. </p>
        <button className="btn play"><a href="/dhindora">Play</a></button>
        <button className="btn info"><a href="/dhindora">More Info</a></button>
          
           </div>
           {/* <div class="audio"> */}
            {/* <button class="bg" onClick="" id="audio-control" ><img className="fa2" src={aud} width="20px"></img></button> */}
        {/* </div> */}
        </div>
    )
}
export default TrailerBody;