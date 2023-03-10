import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login_Signup from "./pages/login-signup";
import Home from "./pages/Home";
import Fir from "./pages/Fir";
import Anonymous from "./pages/Anonymous";
import Feedback from "./pages/Feedback";

import PoliceHome from "./pages/PoliceHome";
import PoliceCases from "./pages/PoliceCases";
import PoliceRob from "./pages/PoliceRob";


import PoliceRobDetails from "./pages/PoliceRobDetails";

import MyFir from "./pages/MyFir";
import MyFirDetails from "./pages/MyFirDetails";
import PoliceAnonymous from "./pages/PoliceAnonymous";
import PoliceFeedback from "./pages/PoliceFeedback";
import AdminHome from './pages/AdminHome'
import AdminAddOfficers from "./pages/AdminAddOfficers";
import AdminAnon from "./pages/AdminAnon";
import AdminFeedback from "./pages/AdminFeedback";
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

        <Route exact path="/police/cases/:category" element={<PoliceRob />} />
        <Route exact path="/police/cases/rob/detail/:id" element={<PoliceRobDetails />}/>



        <Route exact path="/myFir" element={<MyFir />}/>
        <Route exact path="/myFirDetails/:id" element={<MyFirDetails />}/>
        <Route exact path="/police/anonymous/information" element={<PoliceAnonymous />}/>
        <Route exact path="/police/feedback" element={<PoliceFeedback />}/>

        <Route exact path="/admin/home" element={<AdminHome />}/>
        <Route exact path="/admin/addOfficers" element={<AdminAddOfficers />}/>
        <Route exact path="/admin/anonymous" element={<AdminAnon />}/>
        <Route exact path="/admin/feedback" element={<AdminFeedback />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
