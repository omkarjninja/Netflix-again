import { Carousel } from '@trendyol-js/react-carousel';
import "./trailer-carousel.css";
import car from './carou_details';
const handleClick = event => {
    // 👇️ refers to the image element
    console.log(event.target);

    alert("lmao it worked")
}
function TrailerCarousel(){
    
    return(
        <div>
            <h1 className='trailer-head'>{car[0].head}</h1>
            <Carousel show={4} slide={3} swiping={true} useArrowKeys={true}>
    <a href='/tv/vampire-diaries'><div className="carou"></div></a>
    <a href='/movie/unforgivable'><div className="carou carou1">‍</div></a>
    <a href="/tv/stranger-things"><div className={car[0].class}></div></a>
    <a href="/movie/grinch"><div className={car[1].class}></div></a>
    <a href="/tv/orange-is-the-new-black"><div className={car[2].class}></div></a>
   <a href="/movie/goosebumps"><div className={car[3].class}>‍</div></a> 
   <a href="/tv/dont-look-up"><div className={car[4].class}></div></a> 
   <a href="/main/movies"><div className={car[5].class}></div></a> 
   <a href="/movie/wasteland"> <div className={car[6].class}></div></a>
   <a href="/main/movies"> <div className={car[7].class}>‍</div></a>
   <a href="/movie/room"><div className={car[8].class}></div></a> 
   <a href="/movie/discovery"><div className={car[9].class}></div></a> 
    
</Carousel>
{/*  */}
     <h1 className='trailer-head' onClick={handleClick}>{car[1].head}</h1>
    <Carousel show={4} slide={3} swiping={true} useArrowKeys={true}>
   <a href="/movie/red-notice"> <div className={car[10].class}>‍</div></a>
   <a href="/movie/wednesday"><div className={car[11].class}></div></a> 
   <a href="/movie/extraction"><div className={car[12].class}></div></a> 
   <a href="/movie/the-whole-truth"><div className={car[13].class}></div></a> 
   <a href="/movie/narchos"><div className={car[14].class}></div></a> 
   <a href="/tv/departed"><div className={car[15].class}>‍</div></a> 
   <a href="/movie/aquaman"><div className={car[16].class}></div></a> 
   <a href="/main/movies"><div className={car[17].class}></div></a> 
   <a href="/main/tv"><div className={car[18].class}></div></a> 
   <a href="/movie/war"><div className={car[19].class}>‍</div></a> 
    
</Carousel>
<h1 className='trailer-head'>{car[2].head}</h1>
            <Carousel show={4} slide={3} swiping={true} useArrowKeys={true}>
   <a href="/movie/war"><div className={car[19].class}>‍</div></a> 
   <a href="/main/movies"><div className={car[20].class}></div></a> 
   <a href="/tv/2states"><div className={car[21].class}></div></a> 
   <a href="/main/movies"><div className={car[22].class}></div></a> 
   <a href="/movie/kick"><div className={car[23].class}></div></a> 
   <a href="/movie/rockstar"><div className={car[24].class}></div></a> 
   <a href="/main/movies"><div className={car[25].class}>‍</div></a> 
   <a href="/main/movies"><div className={car[26].class}></div></a> 
   <a href="/movie/jai-ho"><div className={car[27].class}></div></a> 
   <a href="/main/movies"><div className={car[28].class}></div></a> 
   <a href="/tv/mumbai-saga"><div className={car[29].class}>‍</div></a> 
   <a href="/main/movies"><div className={car[30].class}></div></a> 
   <a href="/main/movies"><div className={car[31].class}></div></a> 
    
</Carousel>
<h1 className='trailer-head'>{car[3].head}</h1>
            <Carousel show={4} slide={3} swiping={true} useArrowKeys={true}>
    <a href="/tv/one-piece"><div className={car[32].class}></div></a> 
   <a href="/tv/naruto"> <div className={car[33].class}></div></a>
   <a href="/tv/attack-on-titan"><div className={car[34].class}></div></a> 
   <a href="/main/tv"><div className={car[35].class}></div></a> 
   <a href="/tv/cyberpunk"><div className={car[36].class}></div></a> 
   <a href="/main/tv"><div className={car[37].class}>‍</div></a> 
   <a href="/main/tv"><div className={car[38].class}></div></a> 
   <a href="/main/tv"><div className={car[39].class}></div></a> 
   <a href="/main/tv"><div className={car[40].class}></div></a> 
   <a href="/main/tv"> <div className={car[41].class}>‍</div></a>
   <a href="/tv/chainsaw-man"><div className={car[42].class}></div></a> 
   <a href="/main/tv"><div className={car[43].class}></div></a> 
   <a href="/tv/cyberpunk"><div className={car[36].class}></div></a> 
   <a href="/main/tv"><div className={car[37].class}>‍</div></a> 
    
</Carousel>
        </div>
    )
}
export default TrailerCarousel;