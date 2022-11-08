import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage.jsx';
import Login from './Components/Login/Login.jsx';
import {  
  Routes ,
  Router,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
import Landing from './Components/Landingpage/Landing.jsx';
import Notice from './Components/Common/Notice';
import Accordian from './Components/Common/Accordian';
import NoticeBox from './Components/Common/NoticeBox';
import { useState } from 'react';
import { SuccessProvider } from './Components/Login/SuccessProvider';



function App() {
  const[loginSuccess, setloginSuccess]=useState(false);

  return (
    <div className="App">
      <SuccessProvider>
      <Homepage loginSuccess={loginSuccess} setloginSuccess={setloginSuccess}/>
      <Routes>
        <Route exact='true' path='/' element={< Landing />}></Route>
        <Route exact='true' path='/login' element={< Login setloginSuccess={setloginSuccess} loginSuccess={loginSuccess}/>}></Route>

        <Route exact='true' path='/Academic' element={<NoticeBox loginSuccess={loginSuccess}/>}></Route>
        
      </Routes>
      </SuccessProvider>
    </div>
  );
}

export default App;
