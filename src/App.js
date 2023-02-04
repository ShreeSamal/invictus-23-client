import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Login_Signup from './pages/login-signup';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login_Signup/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
