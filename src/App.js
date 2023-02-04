import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login_Signup from "./pages/login-signup";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login_Signup />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
