import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login_Signup from "./pages/login-signup";
import Home from "./pages/Home";
import Fir from "./pages/Fir";
import Anonymous from "./pages/Anonymous";
import Feedback from "./pages/Feedback";

import PoliceHome from "./pages/PoliceHome";
import PoliceCases from "./pages/PoliceCases";
import PoliceRob from "./pages/PoliceRob";
<<<<<<< HEAD
import PoliceRobDetails from "./pages/PoliceRobDetails";
=======
import MyFir from "./pages/MyFir";
import MyFirDetails from "./pages/MyFirDetails";

>>>>>>> e197a4a072212a6b597c1431d79de999d10fcf6b
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
<<<<<<< HEAD
        <Route exact path="/police/cases/rob/detail" element={<PoliceRobDetails />}/>
=======
        <Route exact path="/myFir" element={<MyFir />}/>
        <Route exact path="/myFirDetails/:id" element={<MyFirDetails />}/>

>>>>>>> e197a4a072212a6b597c1431d79de999d10fcf6b
      </Routes>
    </BrowserRouter>
  );
}

export default App;
