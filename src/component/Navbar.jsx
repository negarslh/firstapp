import React from 'react';

import styles from "./Navbar.module.css";
import logo from"../images/logo.jpg" 

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Home Page</li>
          <li>Products</li>
          <li>About us</li>
        </ul>
      </div>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </header>
  )
}

export default Navbar;