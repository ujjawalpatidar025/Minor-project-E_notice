import { Route, Routes, useNavigate} from "react-router-dom";
import Contact from "./Pages/contact";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Layout from "./Pages/Layout";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

import CrtMessage from "./Components/CrtMessage";
import IIST from "./Pages/IIST";
import IIP from "./Pages/IIP";
import IIMR from "./Pages/IIMR";

import RequiredAuth from './Pages/RequiredAuth';
import Query from "./Pages/Query";




function App() {
  let location=useLocation();
  const [layout, setLayout]=useState(false);
  const navigate =useNavigate();
  
  useEffect(() => {
      if(location.pathname!=='/'){ 
        if(!localStorage.user){
          navigate("/");
        }else{
        setLayout(true);}
      }
  }, [location])
  
  return (
    <div className="App">
      {layout && <Layout />}
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<CrtMessage />} />
          <Route path="/iist" element={<IIST />} />
          <Route path="/iip" element={<IIP />} />
          <Route path="/iimr" element={<IIMR />} />
          <Route path="/query" element={<Query/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
