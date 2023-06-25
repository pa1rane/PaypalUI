import React from "react";
import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { RiDownload2Fill } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <input
          type="text"
          name="search"
          className={styles.input}
          placeholder="Search by name or email"
        />
        <div className={styles.iconContainer}>
          <BsSearch className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.download}>
        <RiDownload2Fill className={styles.downloadIcon} />
      </div>
    </div>
  );
};

export default SearchBar;
