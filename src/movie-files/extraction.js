import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import extra from "../assets/videos/extract.mp4"
function Extraction(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={extra} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Extraction</h1>
            <p>Extraction 2 is a 2023 American action thriller film directed by Sam Hargrave and written by Joe Russo, based on the graphic novel Ciudad by Ande Parks, Joe Russo, Anthony Russo, Fernando León González, and Eric Skillman. A sequel to the 2020 film Extraction, it stars Chris Hemsworth, Golshifteh Farahani and Adam Bessa, reprising their roles from the first film, along with Tornike Gogrichiani, Tinatin Dalakishvili, Daniel Bernhardt, Olga Kurylenko and Idris Elba joining the cast. In the film, Tyler Rake (Hemsworth) is initially hired to rescue the family of an abusive crime lord from a Georgian prison.
            </p>
            <h2>Year : 2023</h2>
            <p>Genre : action thriller</p>
        </div>
    )
}
export default Extraction;