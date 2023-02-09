import React from 'react';

import styles from "./Logo.module.css";
import apple from "../images/apple.jpg";
import samsung from "../images/samsung.jpg";
import xiaomi from "../images/xiaomi.png";

const Logo = () => {
  return (
    <div className={styles.container}>
        <h3>Who Support Us?</h3>
        <div>
            <img src={apple} alt="logo"/>
            <img src={samsung} alt="logo"/>
            <img src={xiaomi} alt="logo"/>
        </div>
    </div>
  )
}

export default Logo