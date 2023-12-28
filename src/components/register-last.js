import Head from "./head";
import Footer from "./footer";
import "./register-last.css"
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import check from "../assets/images/check-two.png";
import tick from "../assets/images/small-check.png"
function RegisterLast(){
    const image=check;
    const right=tick;
    return(
        <div>
            <Head></Head>
            <div className="reg3-main">
            <div className="reg3-console">
                <img className="reg3-check" src={image} width="50px"></img>
                <center>
                <h5 className="hey">STEP 2 OF 3</h5>
                <h3 className="hey2">Choose your plan.</h3>
                <p ><img className="right-mark" src={right} width="50px"></img><span className="hey3">No commitments, cancel <br></br> anytime.</span> </p>
                <p className="hey4"><img className="right-mark" src={right} width="50px"></img><span className="hey3">Everything on Netflix for low <br></br>price.</span> </p>
                <p ><img className="right-mark" src={right} width="50px"></img><span className="hey3">No ads and no extra fees.<br></br> Ever.</span> </p>
                <button className="hey6"><a href="/register-plans">NEXT</a></button>
                </center>
        </div>
        </div>
            <Footer></Footer>
        </div>
    )
}
export default RegisterLast;