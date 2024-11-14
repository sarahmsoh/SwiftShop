
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';  
import Home from './components/Home/Home';   
import NavBar from './components/NavBar/NavBar';  
import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';


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

    <div className="App">
      <header style={headerStyle}>
        <h1>ShopEasy with us</h1>
      </header>

      <main style={mainContentStyle}>

        <Contact />
      </main>

      <Footer />
    </div>

  );
}

const headerStyle = {
  backgroundColor: '#2575',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const mainContentStyle = {
  padding: '20px',
  textAlign: 'center',
};

export default App;
