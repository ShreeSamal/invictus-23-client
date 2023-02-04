import {Routes,Route, BrowserRouter} from 'react-router-dom';
import LoginSignup from './pages/login-signup';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<LoginSignup/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
