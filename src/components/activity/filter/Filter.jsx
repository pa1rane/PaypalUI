import React, {useState} from "react";
import styles from './Filter.module.css';

const Filter = ({onSelectDate}) => {

    const [selectDate, setSelectDate] = useState('Last 90 days')

    const handleDataChange = (e) => {
     const selectedValue = e.target.value
     setSelectDate(selectedValue)
     onSelectDate(selectedValue)
    }
  return (
    <>
      <div className={styles.container}>
        <p className={styles.heading}> Filter by</p>
        <div className={styles.dropdowns}>
          <div className={styles.d1}>
            <label htmlFor="date">Date:</label>
            <select name="date" id="date" onChange={handleDataChange} value={selectDate}>
              <option value="last 90 days">Last 90 days</option>
              <option value="this week">This week</option>
              <option value="today">Today</option>
            </select>
          </div>
          <div className={styles.d2}>
            <label htmlFor="type">Type</label>
            <select name="type" id="type"></select>
          </div>
          <div className={styles.d3}>
            <label htmlFor="status">Status</label>
            <select name="status" id="status"></select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
