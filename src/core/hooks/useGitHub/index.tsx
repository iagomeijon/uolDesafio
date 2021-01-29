import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import getConfig from 'next/config';
import {
  TransactionByTidRequest,
  TransactionByTidResponse,
  PermittedTransactionResponse,
} from './interface';

export default function useGitHub() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getUser(userSearch: string): Promise<void> {
    setIsLoading(true);
    await axios
      .get(`https://api.github.com/users/${userSearch}`)
      .then((res) => console.log(res.data))
      .finally(() => setIsLoading(false));
  }

  return {
    state: {
      isLoading,
    },
    actions: {
      getUser,
    },
  };
}
