import "./movie-section.css"
import TrailerHead from "../video-player/video-trailer-header";
import Footer from "../components/footer";
import MovieCard from "./movie-each";
import mov from "../assets/images/25.png";import mov2 from "../assets/images/24.png";import mov7 from "../assets/images/47.jpg"; import bov from"../assets/images/48.jpg";import bov6 from"../assets/images/46.jpg"
import mov3 from "../assets/images/26.png";import mov4 from "../assets/images/27.png";import mov8 from "../assets/images/14.png"; import bov1 from"../assets/images/23.png"
import mov5 from "../assets/images/28.png"; import mov6 from "../assets/images/13.png";import mov9 from "../assets/images/20.png"; import bov2 from"../assets/images/30.png"
import bbka from "../assets/videos/dhindora.mp4";import bov3 from"../assets/images/56.jpg";import bov4 from"../assets/images/38.png";import bov5 from"../assets/images/25.png";

function New_Popular(){
    const trend=[
        {img:mov2,mn:"Red Notice",year:2020,vdo:bbka},
        {img:mov6,mn:"Unforgivable",year:2022,vdo:bbka},
        {img:mov3,mn:"Extraction",year:2019,vdo:bbka},
        {img:mov4,mn:"Truth",year:2021,vdo:bbka},
        {img:mov5,mn:"Narchos",year:2022,vdo:bbka},
        {img:mov7,mn:"Naruto",year:2004},
        {img:mov8,mn:"Stranger T.",year:2016},
        {img:mov9,mn:"Wasteland",year:2021},
        {img:bov,mn:"AOT",year:2013},
        {img:bov1,mn:"Discovery",year:2017},
        {img:bov2,mn:"Aquaman",year:2023},
        {img:bov3,mn:"Chainsawman",year:2022},
        {img:bov4,mn:"Rockstar",year:2012},
        {img:bov5,mn:"Wednesday",year:2022},
        {img:bov6,mn:"One Piece",year:2000},
    ]
    return(
        <div>
            <TrailerHead></TrailerHead>
            <h1 className="Movie-section-head">New and Popular</h1>
            <div className="movie-collect">
            <MovieCard img={trend[0].img} mn={trend[0].mn} year={trend[0].year} vdo={trend[0].vdo} onClick={()=> window.open("/movie/red-notice", "_blank")}></MovieCard>
            <MovieCard img={trend[1].img} mn={trend[1].mn} year={trend[1].year} vdo={trend[0].vdo} onClick={()=> window.open("/movie/unforgivable", "_blank")}></MovieCard>
            <MovieCard img={trend[2].img} mn={trend[2].mn} year={trend[2].year} vdo={trend[0].vdo}  onClick={()=> window.open("/movie/extraction", "_blank")}></MovieCard>
            <MovieCard img={trend[3].img} mn={trend[3].mn} year={trend[3].year} vdo={trend[0].vdo} onClick={()=> window.open("/movie/the-whole-truth", "_blank")}></MovieCard>
            <MovieCard img={trend[4].img} mn={trend[4].mn} year={trend[4].year} vdo={trend[0].vdo}  onClick={()=> window.open("/movie/narchos", "_blank")}></MovieCard>
            </div>
            <div className="movie-collect">
            <MovieCard img={trend[5].img} mn={trend[5].mn} year={trend[5].year} onClick={()=> window.open("/tv/naruto", "_blank")}></MovieCard>
            <MovieCard img={trend[6].img} mn={trend[6].mn} year={trend[6].year} onClick={()=> window.open("/tv/stranger-things", "_blank")}></MovieCard>
            <MovieCard img={trend[7].img} mn={trend[7].mn} year={trend[7].year} onClick={()=> window.open("/movie/wasteland", "_blank")}></MovieCard>
            <MovieCard img={trend[8].img} mn={trend[8].mn} year={trend[8].year} onClick={()=> window.open("/tv/attack-on-titan", "_blank")}></MovieCard>
            <MovieCard img={trend[9].img} mn={trend[9].mn} year={trend[9].year} onClick={()=> window.open("/movie/discovery", "_blank")}></MovieCard>
            </div>
            <div className="movie-collect">
            <MovieCard img={trend[10].img} mn={trend[10].mn} year={trend[10].year} onClick={()=> window.open("/movie/aquaman", "_blank")}></MovieCard>
            <MovieCard img={trend[11].img} mn={trend[11].mn} year={trend[11].year} onClick={()=> window.open("/tv/chainsaw-man", "_blank")}></MovieCard>
            <MovieCard img={trend[12].img} mn={trend[12].mn} year={trend[12].year} onClick={()=> window.open("/movie/rockstar", "_blank")}></MovieCard>
            <MovieCard img={trend[13].img} mn={trend[13].mn} year={trend[13].year} onClick={()=> window.open("/movie/wednesday", "_blank")}></MovieCard>
            <MovieCard img={trend[14].img} mn={trend[14].mn} year={trend[14].year} onClick={()=> window.open("/tv/one-piece", "_blank")}></MovieCard>
            </div>
            
            <Footer></Footer>
        </div>
    )
}
export default New_Popular;