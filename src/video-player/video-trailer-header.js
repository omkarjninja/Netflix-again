import "./video-trailer.css"
function TrailerHead(){
    return(
        <div>
            <div className="trailer-holder">
                <h1>Ninjafy</h1>
                <ul className="trailer-item-holder">
                    <li><a href="/main">Home</a></li>
                    <li><a href="/main/movies">Movies</a></li>
                    <li><a href="/main/tv">TV Shows</a></li>
                    <li><a href="/main/new">New & Popular</a></li>
                </ul>
            </div>
        </div>
    )
}
export default TrailerHead;