import './App.css';
import { useContext } from 'react';
import { SuccessContext } from './Components/Login/SuccessProvider';
import { Routes, Route, useLocation }  from 'react-router-dom'; 
import Landing from './Components/Landingpage/Landing.jsx';
import NoticeBox from './Components/Common/NoticeBox';
import Login from './Components/Login/Login.jsx';
import NavAndSidebar from './Components/NavAndSidebar/NavAndSidebar';
import Addnoticepage from './Components/NavAndSidebar/Addnoticepage.jsx';
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
        <Route exact="true" path="/home" element={<NoticeBox />}></Route>
      </Routes>
      {isLogin!=='Login Successful'?null:<SnackBar/>}
    </div>
    </>
  );
}

export default App;
