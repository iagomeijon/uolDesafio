import { UserCardProps } from './interface';
import styles from './styles.module.scss';

const UserCard = (props: UserCardProps) => {
  const { user, handdleRepos, handleStarred } = props;

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
            Repositorios publicos: {user.public_repos}
          </p>
          <p className={styles.container__infoText}>
            Seguidores: {user.followers}
          </p>
        </div>
        <div>
          <button
            type="button"
            className={styles.container__button}
            onClick={handdleRepos}
          >
            Repos
          </button>
          <button
            type="button"
            className={styles.container__button}
            onClick={handleStarred}
          >
            Starred
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
