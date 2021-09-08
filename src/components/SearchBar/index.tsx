// MARK: Libs
import { useState } from 'react';
// MARK: Hooks
import useStrings from '../../core/hooks/useStrings';
// MARK Interfaces
import { searchBarProps } from './interface';
// MARK: Styles
import styles from './styles.module.scss';

const SearchBar = (props: searchBarProps) => {
  const { getSearch } = props;
  const { strings } = useStrings();
  const { searchBar } = strings.components;
  const [searchText, setSearchText] = useState<string>('');

  const handleInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = () => {
    getSearch(searchText);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.container__input}
        onChange={handleInput}
        placeholder={searchBar.placeHolder}
        id="searchInput"
      />
      <button
        className={styles.container__button}
        type="submit"
        onClick={handleSubmit}
        id="submitSearchButton"
        data-testid="submitSearchButton"
      >
        {searchBar.button}
      </button>
    </div>
  );
};

export default SearchBar;
