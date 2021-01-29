import React from 'react';
import SerachBar from '@components/SearchBar';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.main}>
      <h1>boilerplate</h1>
      <SerachBar />
    </div>
  );
};

export default Home;
