import "./loginhelp.css"
import LoginHead from "./login-head";
import Footer from "./footer";
import Head from "./head";
function LoginHelp(){
    return(
        <div>
            <Head></Head>
            <div className="reg3-main">
            <div className="reg3-console">
                
                <center>
                <h5 className="hey">Login Help</h5>
                <h3 className="hey2">Sorry For The<br></br>Issue</h3>
                <p className="payment-para">Forgot your password or having trouble logging in? We're here to help! Please follow these steps to regain access to your account:<br></br><br></br>If you're experiencing any issues with your account, need help with login, or have any questions, our support team is here to assist you. Contact us from the below mail, phone or through our live chat for immediate help.</p>
                <h4><a href="mailto:ojadhav250@gmail.com">ojadhav250@gmail.com</a>
                    <br /><a href="tel:7892264908"> 7892264908</a></h4>
                    <div className="neww">
                    <h3>Create New Account?</h3><a className="neww-reg" href="/register">click here</a>
                    </div>
                    <div className="neww neww2">
                    <h3>Login?</h3><a className="neww-reg" href="/login">click here</a>
                    </div>
                
                </center>
        </div>
        </div>
            <Footer></Footer>
        </div>
    )
}
export default LoginHelp;