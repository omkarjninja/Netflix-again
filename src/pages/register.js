import Head from "../components/head";
import Footer from "../components/footer";
import laptop from "../assets/images/7.png";
import "../pages/register.css"
function Register(){
    return(
        <div>
            <Head></Head>
           <div className="reg1-main">
            <div className="reg1-console">
            <img className="reg1-img" src={laptop} alt="" width="300px"></img>
            <h5 className="reg1-step">STEP 1 OF 3</h5>
            <h3 className="reg1-step2">Finish setting up your <br />account</h3>
            <p className="reg1-para">Netflix is personalised for you.<br /> Create a password to watch on <br />any device at any time.</p>
            <button className="reg-next"><a href="/register-next">NEXT</a></button>
            </div>
            </div>
                
            
            
            <Footer></Footer>
        </div>
    )
}
export default Register;