import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import getConfig from 'next/config';
import { User } from './interface';

export default function useGitHub() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  async function getUser(userSearch: string): Promise<void> {
    setIsLoading(true);
    await axios
      .get<User>(`https://api.github.com/users/${userSearch}`)
      .then((res) => {
        setUser(res.data);
      })
      .finally(() => setIsLoading(false));
  }

  return {
    state: {
      isLoading,
      user,
    },
    actions: {
      getUser,
    },
  };
}
