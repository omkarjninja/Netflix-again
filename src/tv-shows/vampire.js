import React, { useState } from "react";
import {Media, Video } from '@vidstack/player-react';
import vamp from "../assets/videos/vampire.mp4"
function Vampire(){
    return(
        <div>
            <h1>NINJAFY</h1>
             <div className="video-content">
                <Media>
                <Video loading="visible" controls preload="true">
                 <video loop autoPlay src={vamp} type="video/mp4" />
                </Video>
            </Media>
            </div>
            <h1>Vampire Diaries</h1>
            <p>The lives, loves, dangers and disasters in the town, Mystic Falls, Virginia. Creatures of unspeakable horror lurk beneath this town as a teenage girl is suddenly torn between two vampire brothers.
            </p>
            <h2>Year : 2009</h2>
            <p>Genre : drama fantasy horror</p>
        </div>
    )
}
export default Vampire;