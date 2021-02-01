import { useState } from 'react';
import axios from 'axios';
import { User, Repository } from './interface';

export default function useGitHub() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [userNotFound, setuUserNotFound] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<Repository[] | null>(null);

  async function getUser(userSearch: string): Promise<void> {
    setIsLoading(true);
    setuUserNotFound(false);
    setUser(null);
    await axios
      .get<User>(`https://api.github.com/users/${userSearch}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => setuUserNotFound(true))
      .finally(() => setIsLoading(false));
  }

  async function getRepos(): Promise<void> {
    setIsLoading(true);
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

  function clean(): void {
    setuUserNotFound(false);
    setIsLoading(false);
    setRepositories(null);
    setUser(null);
  }

  return {
    state: {
      isLoading,
      user,
      userNotFound,
      repositories,
    },
    actions: {
      getUser,
      getRepos,
      clean,
    },
  };
}
