import { useState } from 'react';
import axios from 'axios';
import { User, Repository } from './interface';

export default function useGitHub() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [userNotFound, setUserNotFound] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<Repository[] | null>(null);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);

  function clean(): void {
    setUserNotFound(false);
    setIsLoading(false);
    setIsLoadingSearch(false);
    setRepositories(null);
    setUser(null);
  }

  async function getUser(userSearch: string): Promise<void> {
    clean();
    setIsLoadingSearch(true);
    try {
      const res = await axios.get<User>(
        `https://api.github.com/users/${userSearch}`,
      );
      setUser(res.data);
    } catch (err) {
      setUserNotFound(true);
    } finally {
      setIsLoadingSearch(false);
    }
  }

  async function getRepositoriesList(): Promise<void> {
    setRepositories(null);
    setIsLoading(true);
    if (user) {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${user.login}/repos`,
        );
        setRepositories(res.data);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function getStarredList(): Promise<void> {
    setRepositories(null);
    setIsLoading(true);
    if (user) {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${user.login}/starred`,
        );
        setRepositories(res.data);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return {
    state: {
      isLoading,
      user,
      userNotFound,
      repositories,
      isLoadingSearch,
    },
    actions: {
      getUser,
      getRepositoriesList,
      getStarredList,
      clean,
    },
  };
}
