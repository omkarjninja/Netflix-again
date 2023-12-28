import "./footer.css";
import { useNavigate } from "react-router-dom";
  
function Footer(){
    return(
        <div>
                    <contact>
            <p className="phone-number"> Questions?  Call <a href="tel:7892264908"> 7892264908</a></p>
            </contact>
            <footer>
                <div className="foot">
                    <ul>
                        <div className="first">
                        <li><a href="">FAQ</a></li>
                        <li><a href="">investorrelations</a></li>
                        <li><a href="">privacy</a></li>
                        <li><a target="_blank" href="https://fast.com/">speedtest</a></li>
                    </div>
                    <div className="second">
                        <li><a href="">help-center</a></li>
                        <li><a href="">jobs</a></li>
                        <li><a href="">cookiePrefernces</a></li>
                        <li><a href="">legalNotice</a></li>
                    </div>
                    <div className="third">
                        <li><a href="">account  </a></li>
                        <li><a href="">waysToWatch</a></li>
                        <li><a href="">corporateInformation</a></li>
                        <li><a href="">onlyOnNinjafy</a></li>
                    </div>
                    <div className="fourth">
                        <li><a href="">mediaCenter</a></li>
                        <li><a href="">termsOfUse</a></li>
                        <li><a href="">contactus</a></li>
                    </div>
                    </ul>
                </div>
            </footer>
            <boxy>
                        <div className="buttons">
                    <select className="options" name="language" id="lang">
                    <option value="english">ENGLISH</option>
                    <option value="Hindi">HINDI</option>
                    </select>
                    <p className="copyright">NINJAFY INDIA</p>
                    </div>
            </boxy>
        </div>
    )
};
export default Footer;