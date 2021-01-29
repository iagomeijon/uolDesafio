import { useState } from 'react';
import useGitHub from '@core/hooks/useGitHub';
import { searchBarProps } from './interface';
import styles from './styles.module.scss';

const searchBar = (props: searchBarProps) => {
  const [user, setUser] = useState<string>('');
  const { actions } = useGitHub();
  const handleInput = (event) => {
    setUser(event.target.value);
  };

  const search = () => {
    actions.getUser(user);
  };

  return (
    <div className={styles.container}>
      <input className={styles.container__input} onChange={handleInput} />
      <button
        className={styles.container__button}
        type="submit"
        onClick={search}
      >
        Buscar
      </button>
    </div>
  );
};

export default searchBar;
