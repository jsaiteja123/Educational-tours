import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import eduplaces from './eduplaces';
function App() {
  const userEmail="sai@gmil.com"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
