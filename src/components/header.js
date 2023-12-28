import "./header.css";
function Header(){
    return(
        <header>
        <div>
            <h1>Ninjafy</h1>
        </div>
        <div className="buttons">
       <select className="options" name="language" id="lang">
        <option value="english">ENGLISH</option>
        <option value="Hindi" onclick="googleTranslateElementInit()">HINDI</option>
       </select>
        <button className="signin"><a href="/login">Sign In</a></button>
    </div>   
    </header>
    )
};
export default Header;