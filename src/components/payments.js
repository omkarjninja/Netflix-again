import Head from "./head";
import Footer from "./footer";
import check from "../assets/images/check-two.png";
import "./payments.css"
import pay from "../assets/images/11.png"

function Payments(){
    const image=check;
    const payimage=pay
   
    return(
        <div>
            <Head></Head>
            <div className="reg3-main">
            <div className="reg3-console">
                <img className="reg3-check" src={image} width="50px"></img>
                <center>
                <h5 className="hey">STEP 3 OF 3</h5>
                <h3 className="hey2">Choose how to <br></br>pay</h3>
                <p className="payment-para">Your payment is encrypted and you can<br /> change your payment method at <br></br> anytime.</p>
                <h4>Secure for peace of mind.
                    <br />Cancel easily online.</h4>
                    <form action="/upi">
                <button className="hey7" value="UPI AutoPay"><div className="payment-content">
                <p className="payment-para">UPI AutoPay</p>
                <img className="payment-image" src={payimage}></img>
                    </div></button>
                </form>
                
                </center>
        </div>
        </div>
            <Footer></Footer>
        </div>
    )
}

export default Payments;