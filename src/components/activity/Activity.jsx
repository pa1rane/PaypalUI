import React, {useState} from "react";
import styles from "./Activity.module.css";
import Navbar from '../navbar/Navbar';
import Filter from './filter/Filter';
import SearchBar from "./searchbar/SearchBar";
import data from '../../data/data';

const Activity = () => {

  const [selectedDate, setSelectedDate] = useState("This week");
  
  const handleDateSelected = (date) => {
    setSelectedDate(date)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <SearchBar />
        <Filter onSelectDate={handleDateSelected}/>
       <div className={styles.payments}>
         <p className={styles.heading}>Completed</p>
         <p className={styles.date}>{capitalizeFirstLetter(selectedDate)}</p>
          <div className={styles.data}>
             {data.map((payment) => (
              <div className={styles.payment} key={payment.id}>
                <div className="name">{payment.name}</div>
                <div className="date">{payment.date}</div>
                <div className="type">{payment.type}</div>
                <div className="amount">{payment.amount}</div>
              </div>
             ))}
          </div>
       </div>
      </div>
    </>
  );
};

export default Activity;
