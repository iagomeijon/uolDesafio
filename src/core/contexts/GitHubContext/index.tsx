// MARK: Libs
import { createContext, useContext } from 'react';
// MARK: Hooks
import useGitHub from '@core/hooks/useGitHub';
// MARK: Interfaces
import { GitHubContextInterface } from './interfaces';

const GitHubContext = createContext<GitHubContextInterface>(
  {} as GitHubContextInterface,
);

function useGitHubContext(): GitHubContextInterface {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error('useUser must be used within an UserProvider.');
  }
  return context;
}

const GitHubProvider = (props: { children }) => {
  const { children } = props;
  const { actions, state } = useGitHub();

  function getUser(userSearch: string) {
    actions.getUser(userSearch);
  }

  function getRepositoriesList() {
    actions.getRepositoriesList();
  }

  function getStarredList() {
    actions.getStarredList();
  }

  return (
    <GitHubContext.Provider
      value={{
        hasUserNotFound: state.hasUserNotFound,
        isLoading: state.isLoading,
        isLoadingSearch: state.isLoadingSearch,
        repositories: state.repositories,
        user: state.user,
        getUser,
        getRepositoriesList,
        getStarredList,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export { GitHubProvider, useGitHubContext };
