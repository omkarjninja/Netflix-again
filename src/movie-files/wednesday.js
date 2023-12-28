import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import wed from "../assets/videos/wednesday.mp4"
function Wednesday(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={wed} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Wednesday</h1>
            <p>Wednesday is an American coming-of-age supernatural comedy horror television series based on the character Wednesday Addams by Charles Addams. Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the titular character, with Gwendoline Christie, Riki Lindhome, Jamie McShane, Hunter Doohan, Percy Hynes White, Emma Myers, Joy Sunday, Georgie Farmer, Naomi J. Ogawa, Christina Ricci, and Moosa Mostafa appearing in supporting roles. Four out of the eight episodes of the first season were directed by Tim Burton, who also serves as executive producer. It revolves around Wednesday Addams, who attempts to solve a murder mystery at her new school.
            </p>
            <h2>Year : 2022</h2>
            <p>Genre : comedy horror</p>
        </div>
    )
}
export default Wednesday;