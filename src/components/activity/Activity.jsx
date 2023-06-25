import React, { useState } from "react";
import styles from "./Activity.module.css";
import Navbar from "../navbar/Navbar";
import Filter from "./filter/Filter";
import SearchBar from "./searchbar/SearchBar";
import data from "../../data/data";
import picture from "../../assets/name.png";

const Activity = () => {
  const [selectedDate, setSelectedDate] = useState("This week");

  const handleDateSelected = (date) => {
    setSelectedDate(date);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className={styles.container}>
        <Navbar className={styles.nav} />
        <SearchBar />
        <Filter onSelectDate={handleDateSelected} />
        <div className={styles.payments}>
          <p className={styles.heading}>Completed</p>
          <p className={styles.dateTitle}>
            {capitalizeFirstLetter(selectedDate)}
          </p>
          <div className={styles.data}>
            {data.map((payment) => (
              <div className={styles.payment} key={payment.id}>
                <img src={picture} alt="" className={styles.pic} />
                <div className={styles.info}>
                  <div className={styles.name}>{payment.name}</div>
                  <div className={styles.info2}>
                    <div className={styles.date}>{payment.date}</div>
                    <div className={styles.type}>{payment.type}</div>
                  </div>
                </div>
                <div className={styles.amount}>{payment.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
