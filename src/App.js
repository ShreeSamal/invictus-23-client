import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login_Signup from "./pages/login-signup";
import Home from "./pages/Home";
import Fir from "./pages/Fir";
import Anonymous from "./pages/Anonymous";
import Feedback from "./pages/Feedback";
import MyFir from "./pages/MyFir";
import MyFirDetails from "./pages/MyFirDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login_Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path='/fir' element={<Fir />} />
        <Route exact path="/anonymous" element={<Anonymous/>}/>
        <Route exact path="/feedback" element={<Feedback />}/>
        <Route exact path="/myFir" element={<MyFir />}/>
        <Route exact path="/myFirDetails" element={<MyFirDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
