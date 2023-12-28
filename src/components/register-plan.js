import Head from "./head";
import Footer from "./footer";
import "./register-plan.css"
import check from "../assets/images/check-two.png";
import tick from "../assets/images/small-check.png"
import PlanBody from "./plan-body";

function RegisterPlans(){
    const right=tick;
    return(
        <div>
            <Head></Head>
            <div className="regplan-main">
            <div className="regplan-console">
                <center>
                <h5 className="plan-hey">STEP 2 OF 3</h5>
                <h3 className="plan-hey2">Choose the plan that’s right for you</h3>
                    <div className="collection-right">
                <p ><img className="plan-right-mark" src={right} width="25px"></img><span className="plan-hey3">Watch all you want. Ad-free.</span> </p>
                <p className="plan-hey4"><img className="right-mark" src={right} width="25px"></img><span className="plan-hey3">Recommendations just for you.</span> </p>
                <p ><img className="plan-right-mark" src={right} width="25px"></img><span className="plan-hey3">Change or cancel your plan anytime.</span> </p>
                </div>
                <br></br>
                <br></br>
                <PlanBody></PlanBody>
                <p className="payment-para">Choose a Plan</p>
                <select className="options2" name="plans-details" id="plan">
                    <option value="mobile">₹149</option>
                    <option value="basic">₹199</option>
                    <option value="standard">₹449</option>
                    <option value="premium">₹699</option>
                </select>
                <p className="plan-hey5">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
                <p className="plan-hey5">Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                <button className="plan-hey6"><a href="/payments">NEXT</a></button>
               
                </center>
        </div>
        </div>
            <Footer></Footer>
        </div>
    )
}
export default RegisterPlans;