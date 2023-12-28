// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './components/home';
import Register from './pages/register';
import Login from './pages/login';
import ProfilePage from './pages/profilepage';
import RegisterSecondPage from './components/register2';
import Create from './components/register3';
import RegisterLast from './components/register-last';
import RegisterPlans from './components/register-plan';
import Payments from './components/payments';
import Upi from './components/upi';
import MainPlayer from './video-player/mainplayer';
import Movies from './nav-elements/movie-section';
import TV from './nav-elements/tv-section';
import New_Popular from './nav-elements/new-section';
import Dhindora from './video-player/all-video-player';
import RedNotice from './movie-files/red-notice';
import Wednesday from './movie-files/wednesday';
import Extraction from './movie-files/extraction';
import TheWholeTruth from './movie-files/whole';
import Narchos from './movie-files/narchos';
import Unforgivable from './movie-files/unforgivable';
import Grinch from './movie-files/grinch';
import Goosebumps from './movie-files/goosebumps';
import Wasteland from './movie-files/wasteland';
import Room from './movie-files/room';
import Discovery from './movie-files/discovery';
import Aquaman from './movie-files/aquaman';
import War from './movie-files/war';
import Rockstar from './movie-files/rockstar';
import Kick from './movie-files/kick';
import Jai from './movie-files/jaiho';
import Twostates from './tv-shows/2states';
import Chainsawman from './tv-shows/chainsaw';
import Vampire from './tv-shows/vampire';
import Stranger from './tv-shows/stranger';
import Orangeis from './tv-shows/orange';
import Onepiece from './tv-shows/one-piece';
import DontLook from './tv-shows/dont-look';
import Naruto from './tv-shows/naruto';
import Mumbai from './tv-shows/mumbai';
import Departed from './tv-shows/departed';
import CyberPunk from './tv-shows/cyberpunk';
import AttackonTitan from './tv-shows/aot';
import LoginHelp from './components/loginhelp';
import Registration_details from './components/mock';

function App() {
  return (
    <div className="App">
      <Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/register-next' element={<Create />} />
        <Route path='/register-last' element={<RegisterLast />} />
        <Route path='/register-plans' element={<RegisterPlans />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/upi' element={<Upi />} />
        <Route path='/main' element={<MainPlayer />} />
        <Route path='/main/movies' element={<Movies />} />
        <Route path='/main/tv' element={<TV />} />
        <Route path='/main/new' element={<New_Popular />} />
        <Route path='/dhindora' element={<Dhindora />} />
        <Route path='/movie/red-notice' element={<RedNotice />} />
        <Route path='/movie/wednesday' element={<Wednesday />} />
        <Route path='/movie/extraction' element={<Extraction />} />
        <Route path='/movie/the-whole-truth' element={<TheWholeTruth />} />
        <Route path='/movie/narchos' element={<Narchos />} />
        <Route path='/movie/wednesday' element={<Wednesday />} />
        <Route path='/movie/unforgivable' element={<Unforgivable />} />
        <Route path='/movie/grinch' element={<Grinch />} />
        <Route path='/movie/goosebumps' element={<Goosebumps />} />
        <Route path='/movie/wasteland' element={<Wasteland />} />
        <Route path='/movie/room' element={<Room />} />
        <Route path='/movie/discovery' element={<Discovery />} />
        <Route path='/movie/aquaman' element={<Aquaman />} />
        <Route path='/movie/war' element={<War />} />
        <Route path='/movie/rockstar' element={<Rockstar />} />
        <Route path='/movie/kick' element={<Kick />} />
        <Route path='/movie/jai-ho' element={<Jai />} />
        <Route path='/tv/2states' element={<Twostates />} />
        <Route path='/tv/chainsaw-man' element={<Chainsawman />} />
        <Route path='/tv/vampire-diaries' element={<Vampire />} />
        <Route path='/tv/stranger-things' element={<Stranger />} />
        <Route path='/tv/orange-is-the-new-black' element={<Orangeis />} />
        <Route path='/tv/one-piece' element={<Onepiece />} />
        <Route path='/tv/dont-look-up' element={<DontLook />} />
        <Route path='/tv/naruto' element={<Naruto />} />
        <Route path='/tv/mumbai-saga' element={<Mumbai />} />
        <Route path='/tv/departed' element={<Departed />} />
        <Route path='/tv/cyberpunk' element={<CyberPunk />} />
        <Route path='/tv/attack-on-titan' element={<AttackonTitan />} />
        <Route path='/login-help' element={<LoginHelp />} />
        <Route path='/user-details' element={<Registration_details />} />
        



        </Routes>
    </div>
  
  );
}

export default App;
