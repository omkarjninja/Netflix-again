import Header from './header';
import Content from './content';
import Faq from './faq';
import Footer from './footer';
import Button from './Button';
import Faqu from './faqu';
import Dilog from './dilog';


function Home(){
    return(
        <div>
             <Header></Header>
        <Content></Content>
        {/* <Faq></Faq> */}
        <Faqu></Faqu>
        <Dilog></Dilog>
        <Footer></Footer>
        
        </div>
       
    )
}
export default Home;