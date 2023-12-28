import "./mainplayer.css"
import Head from "../components/head"
import Footer from "../components/footer";
import Vidd from "./video-player";
import TrailerHead from "./video-trailer-header";
import TrailerBody from "./trailer-body";
import TrailerCarousel from "./trailer-carousel";
function MainPlayer(){
    return(
        <div>
            <TrailerHead></TrailerHead>
            {/* <Vidd></Vidd> */}
            <TrailerBody></TrailerBody>
            <TrailerCarousel></TrailerCarousel>
            <Footer></Footer>
        </div>
    )
}
export default MainPlayer;