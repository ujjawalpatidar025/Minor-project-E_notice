import './App.css';
import { Routes, Route, useLocation }  from 'react-router-dom'; 
import { SuccessProvider } from './Components/Login/SuccessProvider';
import Landing from './Components/Landingpage/Landing.jsx';

import Login from './Components/Login/Login.jsx';
import NavAndSidebar from './Components/NavAndSidebar/NavAndSidebar';
import Addnoticepage from './Components/NavAndSidebar/Addnoticepage.jsx';
import IIST from './Pages/All Notice/IIST/IIST';
import IIP from './Pages/All Notice/IIP/IIP';
import IIMR from './Pages/All Notice/IIMR/IIMR';



function App() {
  const location = useLocation();
  return (
    <div className="App">

      <SuccessProvider>
        {location.pathname === "/" ? null : <NavAndSidebar />}
        <Addnoticepage/>
        <Routes>
          <Route exact="true" path="/" element={<Landing />}></Route>
          <Route exact="true" path="/login" element={<Login />}></Route>
          <Route exact="true" path="/home">
            <Route exact="true" path="/home/iist" element={<IIST/>}/>
            <Route exact="true" path="/home/iip" element={<IIP/>}/>
            <Route exact="true" path="/home/iimr" element={<IIMR/>}/>
           
          </Route>
        </Routes>
      </SuccessProvider>

    </div>
  );
}

export default App;
