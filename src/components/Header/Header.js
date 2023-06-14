import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
        <img src={props.logo} alt="logo" />
        <h1>{props.title.toUpperCase()}</h1>
    </header>
  )
}

export default Header