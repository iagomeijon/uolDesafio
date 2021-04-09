// MARK: Libs
import React from 'react';
// MARK: Hooks
import { useGitHubContext } from '@core/contexts/GitHubContext';
// MARK: Components
import UserCard from '@components/UserCard';
import UserNotFound from '@components/UserNotFound';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchBar from '@components/SearchBar';
// MARK: Styles
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
      <SearchBar getSearch={search} />
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
