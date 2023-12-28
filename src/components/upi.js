import Head from "./head";
import Footer from "./footer";
import check from "../assets/images/check-two.png";
import "./upi.css";
import React, { useState } from "react";
function UpiMethod(){
    const [searchString, setSearchString, ] = useState();
    const [setstring, setPasswordString, ] = useState();
    const image=check;
    return(
        <div>
            <Head></Head>
            <div className="reg3-main">
            <div className="reg3-console">
                <img className="reg3-check" src={image} width="50px"></img>
                <center>
                <h5 className="hey">STEP 3 OF 3</h5>
                <h3 className="hey2">Set up UPI<br></br>AutoPay</h3>
                <p className="payment-para">You can change this recurring <br></br>payment any time in your settings.</p>
                <select className="options2" name="language" id="lang">
                    <option value="phonepe">PhonePe</option>
                    <option value="Bhimupi">BhimUPI</option>
                    <option value="gpay">Google Pay</option>
                    <option value="Paytm">Paytm</option>
                    <option value="AmazonPay">Amazon Pay</option>

                </select>
                <br></br>
                <label className="upi-text" for="text">UPI ID</label>
                <br></br>
                <input type="text" name="" id="" className="upi-reg options2" value={searchString}
        onChange={(e) => setSearchString(e.target.value)} ></input>
                 <p className="payment-para">after payment completion click on next <br></br> button below.</p>
                 <button className="hey8"><a href="/profile">NEXT</a></button>
                </center>
        </div>
        </div>
            <Footer></Footer>
        </div>
    )
}

export default UpiMethod;