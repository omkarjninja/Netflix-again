import "./register2.css";
import "../pages/register.css"
import Head from "./head"
import Footer from "./footer"
import React, { useState } from "react";
const val=document.getElementById("emi.value");
function RegisterSecondPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const postData = () => {
        console.log(email);
        console.log(password);
    }
    return(
        <div>
        <Head></Head>
        <div className="reg2-main">
            <div className="reg2-console">
        <h5 className="step2-reg">STEP 1 OF 3</h5>
        <h3 className="step2-reg-next">Create a password to<br></br> start<br /> your membership</h3>
        <p className="step3-reg">Just a few more steps and you're done!<br />We hate paperwork, too.</p>
        <form action="/register-last">
        <label className="label-reg" for="email">Email address or phone number</label>
        <input type="email" name="" id="emi" className="email-reg"
        onChange={(e) => setEmail(e.target.value)}></input>
        <br />
        <label className="label2-reg" for="password">Password</label>
            <input type="password" name="" id="" className="pwd-reg"
        onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={postData} type="submit" className="reg-next">
                {/* <a href="/register-last"> */}
                    NEXT
                    {/* </a> */}
                    </button>
            </form>
            </div>
            </div>
        <Footer></Footer>
        </div>
    )
}

export default RegisterSecondPage ;


{/* <h5 className="step">STEP 1 OF 3</h5>
<h3 className="step2">Create a password to start<br> your membership</h3>
<p className="step3">Just a few more steps and you're done!<br>
  We hate paperwork, too.</p>
  <label className="lab1" for="email">Email address or phone number</label>
  <input type="email" name="" id="" className="email" value="" onfocus="move()">
  <br>
  <label className="lab2" for="email">Password</label>
  <input type="password" name="" id="" value="" className="pwd"> */}