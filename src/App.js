import './App.css';
import { useContext } from 'react';
import { SuccessContext } from './Components/Login/SuccessProvider';
import { Routes, Route, useLocation }  from 'react-router-dom'; 
import Landing from './Components/Landingpage/Landing.jsx';

import Login from './Components/Login/Login.jsx';
import NavAndSidebar from './Components/NavAndSidebar/NavAndSidebar';
import Addnoticepage from './Components/NavAndSidebar/Addnoticepage.jsx';
import IIST from './Pages/All Notice/IIST/IIST';
import IIP from './Pages/All Notice/IIP/IIP';
import IIMR from './Pages/All Notice/IIMR/IIMR';
import SnackBar from './Components/Login/SnackBar.jsx'


function App() {
  const location = useLocation();
  const [isLogin,setIsLogin, openAdd, setOpenAdd]=useContext(SuccessContext);
  return (
    <>
    <div className="App">

      {location.pathname === "/" ? null : <NavAndSidebar />}
      <Addnoticepage />
      <Routes>
        <Route exact="true" path="/" element={<Landing />}></Route>
        <Route exact="true" path="/login" element={<Login />}></Route>
        <Route exact="true" path="/home">
            <Route exact="true" path="/home/iist" element={<IIST/>}/>
            <Route exact="true" path="/home/iip" element={<IIP/>}/>
            <Route exact="true" path="/home/iimr" element={<IIMR/>}/>
           
          </Route>
          <Route exact="true" path="/academic">
            <Route exact="true" path="/academic/iist" element={<IIST/>}/>
            <Route exact="true" path="/academic/iip" element={<IIP/>}/>
            <Route exact="true" path="/academic/iimr" element={<IIMR/>}/>
           
          </Route>
          <Route exact="true" path="/social">
            <Route exact="true" path="/social/iist" element={<IIST/>}/>
            <Route exact="true" path="/social/iip" element={<IIP/>}/>
            <Route exact="true" path="/social/iimr" element={<IIMR/>}/>
           
          </Route>
          <Route exact="true" path="/community">
            <Route exact="true" path="/community/iist" element={<IIST/>}/>
            <Route exact="true" path="/community/iip" element={<IIP/>}/>
            <Route exact="true" path="/community/iimr" element={<IIMR/>}/>
           
          </Route>
          <Route exact="true" path="/spam">
            <Route exact="true" path="/spam/iist" element={<IIST/>}/>
            <Route exact="true" path="/spam/iip" element={<IIP/>}/>
            <Route exact="true" path="/spam/iimr" element={<IIMR/>}/>
           
          </Route>
      </Routes>
      {isLogin!=='Login Successful'?null:<SnackBar/>}

    </div>
    </>
  );
}

export default App;
