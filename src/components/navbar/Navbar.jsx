import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.left}>
        <p>p</p>
        <ul className={styles.navList}>
          <li>Home</li>
          <li>Finances</li>
          <li>Send and Request</li>
          <li>Deals</li>
          <li>Wallet</li>
          <li>Activity</li>
          <li>Help</li>
        </ul>
        </div>
        <div className={styles.right}>
          <p>n</p>
          <p>s</p>
          <p>LOGOUT</p>
        </div>
      </div>
    </>
  )
}

export default Navbar
