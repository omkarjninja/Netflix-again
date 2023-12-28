import React, { useState } from "react";
import "./login-body.css";
function LoginBody(){
    const [searchString, setSearchString, ] = useState();
    const [setstring, setPasswordString, ] = useState();
    return(

        <div className="login-body-main">
            <div className="login-body-content">
            <div class="login-body-box">
        <h2 className="login-main-text">Sign In</h2>
        <form>
        <label class="login-lab1" for="email">Email address or Username</label>
        <input type="email" name="" id="username" class="login-email" value={searchString}
        onChange={(e) => setSearchString(e.target.value)} ></input>
        <br />
        <label class="login-lab2" for="email">Password</label>
        <input type="password" name="" id="password" class="login-pwd" value={setstring}
        onChange={(e) => setPasswordString(e.target.value)}></input>
    
        <br />
        {/* <input type="submit" value="Sign In" class="sign-in" onclick="login()"></input> */}
        <a href="/profile"><button type="submit" className="login-sign-in">Sign In</button></a>
        <br />
        </form>
            <div class="login-box2">
                <center>
        {/* <input type="checkbox" name="" id="" value=""><p>Remember Me</p></input> */}
        <input type="checkbox" value="remember me" className="check"></input>
        <span>Remember Me</span>
        <a href="/login-help" className="login-help">Need Help?</a>
        </center>
            </div>
    <div class="login-box3">
        <h4>New to Ninjafy?</h4>
        <a href="/register" className="login-sign-up">Sign up now</a>
    </div>
            </div>
                
            </div>
        </div>
    
    )
}
export default LoginBody;