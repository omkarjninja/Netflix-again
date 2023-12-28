import "./content.css"
import React from "react";
import { NavLink}
	from "./link"
import tvbox from "../assets/images/3.png"
import mobile from "../assets/images/4.png"
import kids from "../assets/images/5.png"
import download from "../assets/images/6.png"
function Content()
{
   return (
    <div classNameName="content">
        <div className="redbox"> </div>
        <div className="main">
        <h1>Unlimited movies,TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form>
        <input type="email" name="email" id="" className="email" placeholder="Enter your email Address"></input>
        <button className="gs">
            <NavLink to="/register" activeStyle>
                    Register
					</NavLink>
        </button>
        </form>
        </div>
        <div className="first-box">
        <img className="tvbox" src={tvbox} ></img>
        <h2 className="tvdef">Enjoy on your TV</h2>
        <p>Watch on smart TVs, PlayStation, Xbox,</p>
        <p>Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="second-box">
            <img className="mobile" src={mobile}></img>
            <h2 className="mobdef">Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your</p>
            <p>phone, tablet, laptop, and TV.</p>
        </div>
        <div className="third-box">
            <img className="kid" src={kids} ></img>
            <h2 className="kiddef">Create profiles for  kids</h2>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
        <div className="fourth-box">
            <img className="download" src={download} ></img>
            <h2 className="downlo">Download your<br /> shows to watch<br /> offline</h2>
            <p>Save your favourites easily and always have</p>
            <p>something to watch.</p>

        </div>
    </div>
   )

};

export default Content;