import { Route, Routes} from "react-router-dom";

import Home from "./Pages/Home";
import CrtMessage from "./Components/CrtMessage";
import IIST from "./Pages/IIST";
import IIP from "./Pages/IIP";
import IIMR from "./Pages/IIMR";
import Query from "./Pages/Query";
import LoginPage from "./Pages/Authentication/LoginPage";
import QuerySol from "./Pages/QuerySol";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "./Redux/features/auth/authSlice";
import Navbar from "./Components/Navbar";
import ErrorPage from "./Pages/ErrorPage";
import LoadingPage from "./Pages/Authentication/LoadingPage";



function App() {

  const dispatch=useDispatch();
  const {user, isLoading}=useSelector((state)=>state.auth);
  const {isMessageLoading}=useSelector((state)=>state.messages);

  useEffect(() => {
    dispatch(isAuthenticated());
  },[])
  
  
  return (
    <div className="App" style={{width:"100vw"}}>
      {(isLoading||isMessageLoading)&&<LoadingPage/>}
      {!isLoading&&<Routes>
          { !user ? <Route  path="/" element={<LoginPage />} />:<Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            {user.admin&&<Route path="/create" element={<CrtMessage />} />}
            <Route path="/IIST" element={<IIST />} />
            <Route path="/IIP" element={<IIP />} />
            <Route path="/IIMR" element={<IIMR />} />
            <Route path="/query" element={<Query />} />
            <Route path="/querySol/:id" element={<QuerySol />} />
            {/* <Route path="*" element={<ErrorPage />} /> */}
            </Route>
            
          }
          {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>}
    </div>
  );
}

export default App;
