import React from 'react';
import styles from './NavBar.module.css';
import { useNavigate, Link } from 'react-router-dom';


function NavBar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout(); 
      navigate('/login'); 
    } else {
      console.error('onLogout is not a function');
    }
  };

  return (
    <nav className={styles.navbar}>

      <div className={styles.navLinks}>
      <Link to="/home" className={styles.navLink}>Home</Link>
      <Link to="/contact" className={styles.navLink}>Contact</Link>
      <Link to="/login" className={styles.navLink}>login</Link>
      </div>

      <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
    </nav>
  );
}



export default NavBar;
