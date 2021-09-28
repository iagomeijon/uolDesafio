// MARK: Libs
import React from 'react';
// MARK: Hooks
import { useGitHubContext } from '@core/contexts/GitHubContext';
import useCarsApi from '@core/hooks/useCarsApi';
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

  const { actions, state } = useCarsApi();

  async function search(userName: string) {
    getUser(userName);
    await actions.getCarList();
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
      {state.carsList.length > 0 ? (
        <ul>
          {state.carsList.map((_car) => {
            return <li key={_car.id}>{_car.modelo}</li>;
          })}
        </ul>
      ) : (
        <h1>sem lista</h1>
      )}
      {hasUserNotFound && <UserNotFound />}
    </div>
  );
};

export default Home;
