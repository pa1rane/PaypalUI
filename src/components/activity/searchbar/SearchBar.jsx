import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <>
      <div className={styles.container}>
        <input type="text" name="search" className={styles.search}/>
      </div>
    </>
  )
}

export default SearchBar
