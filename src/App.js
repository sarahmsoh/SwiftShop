import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';  
import Home from './components/Home/Home';   
import NavBar from './components/NavBar/NavBar';  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/home');  
  };

  
  const onLogout = () => {
    setIsLoggedIn(false);
    navigate('/login'); 
  };

  return (
    <>
      <div>
        {isLoggedIn && <NavBar onLogout={onLogout} />} 

        <Routes>
         
          <Route
            path="/"
            element={<Login onLogin={handleLogin} />} 
          />

          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
