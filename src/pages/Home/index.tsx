import React from 'react';
import useGitHub from '@core/hooks/useGitHub';
import Loading from '@components/Loading';
import UserCard from '@components/UserCard';
import UserNotFound from '@components/UserNotFound';
import SerachBar from '@components/SearchBar';
import styles from './styles.module.scss';

const Home = () => {
  const { actions, state } = useGitHub();
  function search(user: string) {
    actions.clean();
    actions.getUser(user);
  }
  return (
    <div className={styles.main}>
      <SerachBar getSearch={search} />
      {state.isLoading && <Loading />}
      {state.user && (
        <UserCard
          user={state.user}
          repositories={state.repositories}
          handdleRepos={actions.getRepos}
          handleStarred={() => alert('starred')}
        />
      )}
      {state.userNotFound && <UserNotFound />}
    </div>
  );
};

export default Home;
