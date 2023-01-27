
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

import Level3  from './Level3components/Level3';
import Level4  from './Level4components/Level4';
=======

import {
  Routes,
  Route,
} from "react-router-dom";
import QuickTransfer from './Level2components/QuickTransfer';
import Level7SelectDebitAccount from './Level7components/Level7SelectDebitAccount';

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

        <Route path="/Level3" element={<Level3/>} />
        <Route path="/Level4" element={<Level4/>} />

        <Route path="/QuickTransfer" element={<QuickTransfer/>} />


      </Routes>
    </>
  );
}

export default App;
