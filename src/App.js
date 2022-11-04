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

function App() {
  return (
    
    <div className="App">
      <Homepage/>
      <Routes>
        <Route exact='true' path='/' element={< Landing />}></Route>
        <Route exact='true' path='/login' element={< Login />}></Route>

        <Route exact='true' path='/Academic' element={<NoticeBox/>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
