import { Route, Routes} from "react-router-dom";
import Contact from "./Pages/contact";
import Home from "./Pages/Home";
import CrtMessage from "./Components/CrtMessage";
import IIST from "./Pages/IIST";
import IIP from "./Pages/IIP";
import IIMR from "./Pages/IIMR";
import Query from "./Pages/Query";
import LoginPage from "./Pages/Authentication/LoginPage";
import ProtectedRoute from "./Pages/Authentication/ProtectedRoute";
import QuerySol from "./Pages/QuerySol";



function App() {
  return (
    <div className="App" style={{width:"100vw"}}>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<CrtMessage />} />
          <Route path="/iist" element={<IIST />} />
          <Route path="/iip" element={<IIP />} />
          <Route path="/iimr" element={<IIMR />} />
          <Route path="/query" element={<Query />} />
          <Route path="/querySol/:id" element={<QuerySol />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
