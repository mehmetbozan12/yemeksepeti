import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home/Home.jsx';
import Account from './pages/Account/Account';
import Sigup from './pages/Sigup/Sigup';
import Register from  './pages/Register/Register';




function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Sigup' element={<Sigup />} />
        <Route path = '/register' element={<Register/>}/>

      </Routes>
    </div>
  </BrowserRouter>
   
  );
}

export default App;
