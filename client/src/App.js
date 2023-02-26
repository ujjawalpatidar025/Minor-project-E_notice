import { Route, Routes} from "react-router-dom";
import Contact from "./Pages/contact";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Layout from "./Pages/Layout";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import CrtMessage from "./Components/CrtMessage";



function App() {
  let location=useLocation();
  const [layout, setLayout]=useState(false);
  
  useEffect(() => {
      if(location.pathname!=='/') setLayout(true);
  }, [location])
  
  return (
    <div className="App">
      {/* {
          layout&&<Layout/>
      } */}
      <Routes>
        <Route path="/" >
          <Route index element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<CrtMessage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
