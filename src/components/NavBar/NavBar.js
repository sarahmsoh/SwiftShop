import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar({ onLogout, onContactClick, onCartClick }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link to="/home" className={styles.navLink}>
          Home
        </Link>
        <Link onClick={onContactClick} className={styles.navLink}>
          Contact
        </Link>
        <Link onClick={onCartClick} className={styles.navLink}>
          Cart
        </Link>
      </div>
      <button className={styles.logoutButton} onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

export default NavBar;
