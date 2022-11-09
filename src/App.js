import './App.css';
import { Routes, Route, useLocation }  from 'react-router-dom'; 
import { SuccessProvider } from './Components/Login/SuccessProvider';
import Landing from './Components/Landingpage/Landing.jsx';
import NoticeBox from './Components/Common/NoticeBox';
import Login from './Components/Login/Login.jsx';
import NavAndSidebar from './Components/NavAndSidebar/NavAndSidebar';



function App() {
  const location = useLocation();
  return (
    <div className="App">
      <SuccessProvider>
        {location.pathname === "/" ? null : <NavAndSidebar />}
        <Routes>
          <Route exact="true" path="/" element={<Landing />}></Route>
          <Route exact="true" path="/login" element={<Login />}></Route>
          <Route exact="true" path="/home" element={<NoticeBox />}></Route>
        </Routes>
      </SuccessProvider>
    </div>
  );
}

export default App;
