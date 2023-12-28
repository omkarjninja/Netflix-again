import "./movie-each.css";
// import mov from "../assets/images/25.png"
import bbka from "../assets/videos/dhindora.mp4"
function MovieCard(props){
    // const format=props.img +".png"
    return(
        <div>
            <div className="movie-holder">
                <img className="movie-img" src={props.img} onClick={props.onClick}></img>
                <p className="movie-title">{props.mn}</p>
                <p className="movie-desc">{props.year}</p>
            </div>
        </div>
    )
}
export default MovieCard;