import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login_Signup from "./pages/login-signup";
import Home from "./pages/Home";
import Fir from "./pages/Fir";
import Anonymous from "./pages/Anonymous";
import Feedback from "./pages/Feedback";
import PoliceHome from "./pages/PoliceHome";
import PoliceCases from "./pages/PoliceCases";
import PoliceRob from "./pages/PoliceRob";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login_Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path='/fir' element={<Fir />} />
        <Route exact path="/anonymous" element={<Anonymous/>}/>
        <Route exact path="/feedback" element={<Feedback />}/>
        <Route exact path="/policeHome" element={<PoliceHome/>}/>
        <Route exact path="/police/cases" element={<PoliceCases />} />
        <Route exact path="/police/cases/rob" element={<PoliceRob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
