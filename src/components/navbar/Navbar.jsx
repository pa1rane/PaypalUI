import React from "react";
import styles from "./Navbar.module.css";
import { BsPaypal } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { TbSettingsFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <div className={styles.logoContainer}>
            <BsPaypal className={styles.logo} />
          </div>
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
          <IoMdNotifications className={styles.icon} />
          <TbSettingsFilled className={styles.icon} />
          <p className={styles.logout}>LOG OUT</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
