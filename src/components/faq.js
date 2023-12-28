import "./faq.css"
 import plus from "../assets/images/plus.png"
 import cancel from "../assets/images/cancel.png"
function Faq(){

    return(
      <div>
         <h1 className="fak">Frequently Asked Questions</h1>
    <div className="faq-container">
    <div className="faq active">
        <h3 className="faq-title">
            What is Ninjafy
        </h3>

        <p className="faq-text">
            Ninjafy is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
        </p>

        <button className="faq-toggle">
        <img src={plus} width="10px"></img> 
        <img src={cancel} width="10px"></img>    
        
        </button>
    </div>

    <div className="faq">
        <h3 className="faq-title">
        How much does Ninjafy cost?
        </h3>
        <p className="faq-text">
            Watch Ninjafy on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
        </p>
        {/* <button className="faq-toggle">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
        <FontAwesomeIcon icon="fa-solid fa-x" />
        </button> */}
    </div>
    
    <div className="faq">
        <h3 className="faq-title">
        Where can I watch?
        </h3>
        <p className="faq-text">
            Watch anywhere, anytime. Sign in with your Ninjafy account to watch instantly on the web at Ninjafy.com from your personal computer or on any internet-connected device that offers the Ninjafy app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Ninjafy with you anywhere.
        </p>
        {/* <button className="faq-toggle">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
        <FontAwesomeIcon icon="fa-solid fa-x" />
        </button> */}
    </div>
    
    <div className="faq">
        <h3 className="faq-title">
        How do I cancel?
        </h3>
        <p className="faq-text">
            Ninjafy is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </p>
        {/* <button className="faq-toggle">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
        <FontAwesomeIcon icon="fa-solid fa-x" />
        </button> */}
    </div>
    
    <div className="faq">
        <h3 className="faq-title">
        What can I watch on Ninjafy
        </h3>
        <p className="faq-text">
            Ninjafy has an extensive library of feature films, documentaries, TV shows, anime, award-winning Ninjafy originals, and more. Watch as much as you want, anytime you want.
        </p>
        {/* <button className="faq-toggle">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
        <FontAwesomeIcon icon="fa-solid fa-x" />
        </button> */}
    </div>
    </div> 
    <dilog className="di">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <input type="email" name="" id="" className="email" value="Email Address"></input>
        <button className="gs"><b><a href="register01.html">Get Started</a></b></button>
    </dilog>
      </div>
    )
};
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
export default Faq;