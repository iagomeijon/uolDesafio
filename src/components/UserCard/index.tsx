import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import RepositoryList from '../RepositoryList';
import { onStarredClicked, onReposClicked } from './helpers';
import { UserCardProps } from './interface';

import styles from './styles.module.scss';

const UserCard = (props: UserCardProps) => {
  const { user, repositories, isLoading, handleRepos, handleStarred } = props;
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
            Repositórios públicos: {user.public_repos}
          </p>
          <p className={styles.container__infoText}>
            Seguidores: {user.followers}
          </p>
        </div>
        <div>
          <button
            type="button"
            className={styles.container__button}
            onClick={() => onReposClicked(handleRepos, setListTitle)}
          >
            Repos
          </button>
          <button
            type="button"
            className={styles.container__button}
            onClick={() => onStarredClicked(handleStarred, setListTitle)}
          >
            Starred
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
