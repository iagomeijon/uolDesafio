// MARK: Libs
import { useState } from 'react';
// MARK: Hooks
import useStrings from '@core/hooks/useStrings';
// MARK: components
import CircularProgress from '@material-ui/core/CircularProgress';
import RepositoryList from '../RepositoryList';
// MARK: Helprs
import { onStarredClicked, onReposClicked } from './helpers';
// MARK: Interfaces
import { UserCardProps } from './interface';
// MARK: Styles
import styles from './styles.module.scss';

const UserCard = (props: UserCardProps) => {
  const { user, repositories, isLoading, handleRepos, handleStarred } = props;
  const { strings } = useStrings();
  const { userCard } = strings.components;
  const [listTitle, setListTitle] = useState<string>('');

  return (
    <div className={styles.container}>
      <div className={styles.container__row}>
        <img
          src={user.avatar_url}
          alt="Avatar"
          className={styles.container__image}
        />
        <p className={styles.container__loginText}>{user.login}</p>
      </div>
      <div className={styles.container__row}>
        <div>
          <p className={styles.container__infoText}>
            {`${userCard.subTitle1} ${user.public_repos}`}
          </p>
          <p className={styles.container__infoText}>
            {`${userCard.subTitle2} ${user.followers}`}
          </p>
        </div>
        <div>
          <button
            type="button"
            className={styles.container__button}
            onClick={() => onReposClicked(handleRepos, setListTitle)}
          >
            {userCard.button1}
          </button>
          <button
            type="button"
            className={styles.container__button}
            onClick={() => onStarredClicked(handleStarred, setListTitle)}
          >
            {userCard.button2}
          </button>
        </div>
      </div>
      <div className={styles.container__listBox}>
        {isLoading ? (
          <CircularProgress size={35} />
        ) : (
          repositories && (
            <RepositoryList list={repositories} listTitle={listTitle} />
          )
        )}
      </div>
    </div>
  );
};

export default UserCard;
