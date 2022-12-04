
import './App.css';
import Mainpage from './mainpagecomponents/Mainpage';
import Viewpassbook from './mainpagecomponents/Viewpassbook';
import Debitcard from './mainpagecomponents/Debitcard';
import LandingPage from './LandingPageComponents/LandingPage/LandingPage';
import Scoreboard from './ScoreboardComponents/Scoreboard';
import Login from './LoginComponents/Login';
import LevelsPage from './LandingPageComponents/LevelsPage/LevelsPage';
import Level1 from './Level1components/Level1';
import Level2  from './Level2components/Level2';
import Level6  from './Level6components/Level6';

import {
  Routes,
  Route,
} from "react-router-dom";
import QuickTransfer from './Level2components/QuickTransfer';



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
        <Route path="/Level1" element={<Level1/>} />
        <Route path="/Level2" element={<Level2/>} />
        <Route path="/Level6" element={<Level6/>} />
        <Route path="/QuickTransfer" element={<QuickTransfer/>} />


      </Routes>
    </>
  );
}

export default App;
