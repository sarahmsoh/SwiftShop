import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'; 
import NavBar from '../NavBar/NavBar';


function Home({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate('/login'); 
  };

  return (
    <div className={styles.homeContainer}>
      {/* Logout Button at the top */}
      <NavBar/>

      {/* Content of the home page */}
      <div className={styles.homeContent}>
        <h1>Welcome to SwiftShop</h1>
        <h3>ShopEasy with us🎉</h3>
        <p>Start Shopping!</p>
      </div>
      <h1>AVAILABLE GOODS: </h1>
    </div>
  );
}

export default Home;
