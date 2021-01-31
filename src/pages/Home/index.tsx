import React from 'react';
import useGitHub from '@core/hooks/useGitHub';
import Loading from '@components/Loading';
import SerachBar from '@components/SearchBar';
import styles from './styles.module.scss';

const Home = () => {
  const { actions, state } = useGitHub();
  return (
    <div className={styles.main}>
      <SerachBar getSearch={actions.getUser} />
      {state.isLoading ? (<Loading />) : (null)}
    </div>
  );
};

export default Home;
