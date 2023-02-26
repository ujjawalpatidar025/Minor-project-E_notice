import { Route, Routes, useNavigate} from "react-router-dom";
import Contact from "./Pages/contact";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Layout from "./Pages/Layout";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import RequiredAuth from './Pages/RequiredAuth';



function App() {
  let location=useLocation();
  const [layout, setLayout]=useState(false);
  const navigate =useNavigate();
  
  useEffect(() => {
      if(location.pathname!=='/'){ 
        setLayout(true);
        if(!localStorage.user){
          navigate("/");
        }
      }
  }, [location])
  
  return (
    <div className="App">
      {/* {layout && <Layout />} */}
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
