import { useState } from 'react';
import { searchBarProps } from './interface';
import styles from './styles.module.scss';

const searchBar = (props: searchBarProps) => {
  const {getSearch} = props;
  const [searchText, setSearchText] = useState<string>('');
  const handleInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = () => {
    getSearch(searchText)
  };

  return (
    <div className={styles.container}>
      <input className={styles.container__input} onChange={handleInput} />
      <button
        className={styles.container__button}
        type="submit"
        onClick={handleSubmit}
      >
        Buscar
      </button>
    </div>
  );
};

export default searchBar;
