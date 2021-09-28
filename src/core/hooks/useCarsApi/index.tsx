// MARK: Libs
import { useState } from 'react';
import axios from 'axios';

export default function useCarsApi() {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function clean(): void {
    setCarsList([]);
    setIsLoading(false);
  }

  async function getCarList(): Promise<void> {
    clean();
    setIsLoading(true);
    try {
      const res = await axios.get<Car[]>(
        `https://sprint-cars.herokuapp.com/api/v1/teste`,
      );
      setCarsList(res.data);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    state: {
      carsList,
      isLoading,
    },
    actions: {
      getCarList,
      clean,
    },
  };
}
