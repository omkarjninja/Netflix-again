import React, { useEffect, useState } from 'react';
import info from '../components/info';
import "../components/login-body.css";
function LoginAgain(props){
//     const gmail=props.email;
//     const yess=props.pass;
    const [Loginemail, putEmail, ] = useState();
    const [Loginpwd, PutPassword, ] = useState();
//     const [APIData, setAPIData] = useState([]);
//     const check =()=>{
//         var a="omkar@gmail.com";
//         var b="ojadhav250@gmail.com"
//         var c="jadhav0739@gmail.com"
//         var d="mukraks2@gmail.com"
//         var e="user2gmail.com"
//         var g="hi@gmail.com"
//         var f=info[1].email; var k=info[5].email;
//         var h=info[2].email; var l=info[6].email;
//         var i=info[3].email; var m=info[7].email;
//         var j=info[4].email; var n=info[8].email;
//    var pass1=info[0].password;var pass1=info[1].password;var pass2=info[2].password;var pass3=info[3].password;
//    var pass4=info[4].password;var pass5=info[5].password;var pass6=info[6].password;var pass7=info[7].password;
//    var pass12=info[8].password;var pass8=info[9].password;var pass9=info[10].password;var pass10=info[11].password;
//    var pass11=info[13].password;





    //        if(Loginemail===a||b||c||d||e||g||h||f||i||j||k||l||m||n&&Loginpwd===yess||pass1||pass2||pass3||pass4||pass5||pass6||pass7||pass8||pass9||pass10||pass11)
    //        {
    //            window.open("/profile")
    //        }else{
    //            alert("login failed")
    //        }
   
   
    //    }
//     useEffect(() => {
//         axios.get(`https://6508fd9356db83a34d9ccb26.mockapi.io/myDb`)
//             .then((response) => {
//                 setAPIData(response.data);
//             })
//     }, [])
//     const full=APIData;
//    function yes(){
//     full.map((data)=>{
//         const s=data.email;
//         console.log(s);
//         return(s)
//     })
//    }
//    for(var key in APIData){
//     console.log(key + ' - ' + APIData[key])
//   }
// const xyz=full.forEach((APIData) => {
//     Object.entries(APIData).forEach(([key, value]) => {
//       console.log(Object.entries(APIData));
//     });
//   });
// // function getKeyByValue(object, key) {
//     return Object.values(APIData).find(value => object[value] === key);
//   }
//   console.log(getKeyByValue(APIData,"email"))
// Object.va
//    const y=yes()
//    function check(){
//     alert(Loginemail)
//     alert(Loginpwd)
//     alert(xyz)
//     console.log(Loginemail);
//     console.log(xyz);
//     console.log(Loginpwd);
//     if(Loginemail==&&Loginpwd=="ninja"){
//         window.open("/profile")
//     }else{
//             alert("login failed")
//          }
   
    
//     fetch('https://6508fd9356db83a34d9ccb26.mockapi.io/myDb')
//    .then(response => response.json())
//    .then(data => console.log(data));

    // useEffect(() => {
    //     axios.get(`https://6508fd9356db83a34d9ccb26.mockapi.io/myDb`)
    //         .then((response) => {
    //             console.log(response.data);
    //             setAPIData(response.data);
    //         })
    // }, [])
    
    // const hello=JSON.keys(setAPIData)
    // console.log(hello)
    // const setData = (data) => {
    //     const obj=[{
    //         email:data.email,
    //         pass:data.password
    //     }]
    //     console.log(obj);
    // }
    // console.log();
    // const lmao=()=>{{if(Loginemail===maal.email&&Loginpwd===maal.password){
    //     window.open("/profile")
    // }else{
    //     alert("lmao")
    // }}
    //     {APIData.map((data) => {
    //      return (
    //          console.log(data.email)
    //    )})}
    // function check(){
    //     if(Loginemail===APIData.map(data=>{data.email} && Loginpwd===APIData.map((data)=>{data.password)}
    //     {
    //         window.open("/profile")
    //     }else{
    //         alert("login failed")
    //     }
    // }
    
    return(
        <div className="login-body-main">
             
    <div className="login-body-content">
            <div class="login-body-box">
        <h2 className="login-main-text">Sign In</h2>
        <form action='/profile'>
        <label class="login-lab1" for="email">Email address or Username</label>
        <input type="email" name="" id="username" class="login-email" 
        onChange={(e) => putEmail(e.target.value)} ></input>
        <br />
        <label class="login-lab2" for="email">Password</label>
        <input type="password" name="" id="password" class="login-pwd" 
        onChange={(e) => PutPassword(e.target.value)}></input>
    
        <br />
        {/* <input type="submit" value="Sign In" class="sign-in" onclick="login()"></input> */}
        <button type="submit" className="login-sign-in">Sign In</button>
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
export default LoginAgain;