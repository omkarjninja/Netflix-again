import "./movie-section.css"
import TrailerHead from "../video-player/video-trailer-header";
import Footer from "../components/footer";
import MovieCard from "./movie-each";
import mov from "../assets/images/25.png";import mov2 from "../assets/images/12.jpg";import mov7 from "../assets/images/29.png"; import bov from"../assets/images/56.jpg";import bov6 from"../assets/images/20.png"
import mov3 from "../assets/images/16.png";import mov4 from "../assets/images/18.png";import mov8 from "../assets/images/22.png"; import bov1 from"../assets/images/50.jpg"
import mov5 from "../assets/images/25.png"; import mov6 from "../assets/images/14.png";import mov9 from "../assets/images/46.jpg"; import bov2 from"../assets/images/47.jpg"
import bbka from "../assets/videos/dhindora.mp4";import bov3 from"../assets/images/43.png";import bov4 from"../assets/images/35.png";import bov5 from"../assets/images/48.jpg";

function TV(){
    const trend=[
        {img:mov2,mn:"Vampire d.",year:2020,},
        {img:mov6,mn:"Stranger t.",year:2022,},
        {img:mov3,mn:"OITNB",year:2019,},
        {img:mov4,mn:"Dont Look",year:2021,},
        {img:mov5,mn:"Wednesday",year:2022,},
        {img:mov7,mn:"Departed",year:2019},
        {img:mov8,mn:"Room",year:2015},
        {img:bov,mn:"Chainsawman",year:2015},
        {img:bov1,mn:"Cyberpunk",year:2017},
        {img:bov2,mn:"Naruto",year:2023},
        {img:bov3,mn:"Mumbai sa",year:2021},
        {img:bov4,mn:"2 states",year:2012},
        {img:bov5,mn:"AOT",year:2016},
        {img:bov6,mn:"Wasteland",year:2014},
        {img:mov9,mn:"One piece ..",year:2021},
    ]
    return(
        <div>
            <TrailerHead></TrailerHead>
            <h1 className="Movie-section-head">TV Shows</h1>
            <div className="movie-collect">
            <MovieCard img={trend[0].img} mn={trend[0].mn} year={trend[0].year} vdo={trend[0].vdo} onClick={()=> window.open("/tv/vampire-diaries", "_blank")}></MovieCard>
            <MovieCard img={trend[1].img} mn={trend[1].mn} year={trend[1].year} vdo={trend[0].vdo} onClick={()=> window.open("/tv/stranger-things", "_blank")}></MovieCard>
            <MovieCard img={trend[2].img} mn={trend[2].mn} year={trend[2].year} vdo={trend[0].vdo}  onClick={()=> window.open("/tv/orange-is-the-new-black", "_blank")}></MovieCard>
            <MovieCard img={trend[3].img} mn={trend[3].mn} year={trend[3].year} vdo={trend[0].vdo} onClick={()=> window.open("/tv/dont-look-up", "_blank")}></MovieCard>
            <MovieCard img={trend[4].img} mn={trend[4].mn} year={trend[4].year} vdo={trend[0].vdo}  onClick={()=> window.open("/movie/wednesday", "_blank")}></MovieCard>
            </div>
            <div className="movie-collect">
            <MovieCard img={trend[5].img} mn={trend[5].mn} year={trend[5].year} onClick={()=> window.open("/tv/departed", "_blank")}></MovieCard>
            <MovieCard img={trend[6].img} mn={trend[6].mn} year={trend[6].year} onClick={()=> window.open("/movie/room", "_blank")}></MovieCard>
            <MovieCard img={trend[7].img} mn={trend[7].mn} year={trend[7].year} onClick={()=> window.open("/tv/chainsaw-man", "_blank")}></MovieCard>
            <MovieCard img={trend[8].img} mn={trend[8].mn} year={trend[8].year} onClick={()=> window.open("/tv/cyberpunk", "_blank")}></MovieCard>
            <MovieCard img={trend[9].img} mn={trend[9].mn} year={trend[9].year} onClick={()=> window.open("/tv/naruto", "_blank")}></MovieCard>
            </div>
            <div className="movie-collect">
            <MovieCard img={trend[10].img} mn={trend[10].mn} year={trend[10].year} onClick={()=> window.open("/tv/mumbai-saga", "_blank")}></MovieCard>
            <MovieCard img={trend[11].img} mn={trend[11].mn} year={trend[11].year} onClick={()=> window.open("/tv/2states", "_blank")}></MovieCard>
            <MovieCard img={trend[12].img} mn={trend[12].mn} year={trend[12].year} onClick={()=> window.open("/tv/attack-on-titan", "_blank")}></MovieCard>
            <MovieCard img={trend[13].img} mn={trend[13].mn} year={trend[13].year} onClick={()=> window.open("/movie/wasteland", "_blank")}></MovieCard>
            <MovieCard img={trend[14].img} mn={trend[14].mn} year={trend[14].year} onClick={()=> window.open("/tv/one-piece", "_blank")}></MovieCard>
            </div>
            
            <Footer></Footer>
        </div>
    )
}
export default TV;