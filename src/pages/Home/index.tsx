import React from 'react';
import useGitHub from '@core/hooks/useGitHub';
import UserCard from '@components/UserCard';
import UserNotFound from '@components/UserNotFound';
import CircularProgress from '@material-ui/core/CircularProgress';
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
      {state.loadingSearch && <CircularProgress size={60} />}
      {state.user && (
        <UserCard
          user={state.user}
          isLoading={state.isLoading}
          repositories={state.repositories}
          handdleRepos={actions.getRepositoriesList}
          handleStarred={() => alert('starred')}
        />
      )}
      {state.userNotFound && <UserNotFound />}
    </div>
  );
};

export default Home;
