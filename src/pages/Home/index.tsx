import React from 'react';
import { useGitHubContext } from '@core/contexts/GitHubContext';
import UserCard from '@components/UserCard';
import UserNotFound from '@components/UserNotFound';
import CircularProgress from '@material-ui/core/CircularProgress';
import SerachBar from '@components/SearchBar';
import styles from './styles.module.scss';

const Home = () => {
  const {
    user,
    isLoading,
    hasUserNotFound,
    isLoadingSearch,
    repositories,
    getUser,
    getRepositoriesList,
    getStarredList,
  } = useGitHubContext();

  function search(userName: string) {
    getUser(userName);
  }

  return (
    <div className={styles.main}>
      <SerachBar getSearch={search} />
      {isLoadingSearch && <CircularProgress size={60} />}
      {user && (
        <UserCard
          user={user}
          isLoading={isLoading}
          repositories={repositories}
          handleRepos={getRepositoriesList}
          handleStarred={getStarredList}
        />
      )}
      {hasUserNotFound && <UserNotFound />}
    </div>
  );
};

export default Home;
