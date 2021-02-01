import { useState } from 'react';
import axios from 'axios';
import { User, Repository } from './interface';

export default function useGitHub() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [userNotFound, setuUserNotFound] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<Repository[] | null>(null);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);

  async function getUser(userSearch: string): Promise<void> {
    setLoadingSearch(true);
    setuUserNotFound(false);
    setUser(null);
    await axios
      .get<User>(`https://api.github.com/users/${userSearch}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => setuUserNotFound(true))
      .finally(() => setLoadingSearch(false));
  }

  async function getRepositoriesList(): Promise<void> {
    setIsLoading(true);
    setRepositories(null);
    if (user) {
      await axios
        .get(`https://api.github.com/users/${user.login}/repos`)
        .then((res) => {
          setRepositories(res.data);
        })
        .catch()
        .finally(() => setIsLoading(false));
    }
  }

  async function getStarredList(): Promise<void> {
    setIsLoading(true);
    setRepositories(null);
    if (user) {
      await axios
        .get(`https://api.github.com/users/${user.login}/starred`)
        .then((res) => {
          setRepositories(res.data);
        })
        .catch()
        .finally(() => setIsLoading(false));
    }
  }

  function clean(): void {
    setuUserNotFound(false);
    setIsLoading(false);
    setLoadingSearch(false);
    setRepositories(null);
    setUser(null);
  }

  return {
    state: {
      isLoading,
      user,
      userNotFound,
      repositories,
      loadingSearch,
    },
    actions: {
      getUser,
      getRepositoriesList,
      getStarredList,
      clean,
    },
  };
}
