import "./login.css"
import LoginHead from "../components/login-head";
import LoginBody from "../components/login-body";
import Footer from "../components/footer";
import LoginAgain from "./login2";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Login(){
    const vxy=[{
        email:"mukraks2@gmail.com",
        password:"ninja",
    }]
        return(
            <div>
            <LoginHead></LoginHead>
            <LoginAgain></LoginAgain>
            <Footer></Footer>
        </div>
        )
}
   
export default Login;
