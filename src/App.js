
import './App.css';
import Mainpage from './mainpagecomponents/Mainpage';
import Viewpassbook from './mainpagecomponents/Viewpassbook';
import Debitcard from './mainpagecomponents/Debitcard';
import LandingPage from './LandingPageComponents/LandingPage/LandingPage';
import Scoreboard from './ScoreboardComponents/Scoreboard';
import Login from './LoginComponents/Login';
import LevelsPage from './LandingPageComponents/LevelsPage/LevelsPage';

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <LandingPage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Viewdebitcard" element={<Debitcard/>} />
        <Route path="/Viewpassbook" element={<Viewpassbook/>} />
        <Route path="/Scoreboard" element={<Scoreboard/>} />
        <Route path="/LevelsPage" element={<LevelsPage/>} />
      </Routes>

     

      
     
     
     
    </>
  );
}

export default App;
