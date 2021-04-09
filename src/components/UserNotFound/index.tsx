// MARK: Hooks
import useStrings from '@core/hooks/useStrings';
// MARK: Styles
import styles from './styles.module.scss';

const UserNotFound = () => {
  const { strings } = useStrings();
  const { userNotFound } = strings.components;
  return (
    <div className={styles.container}>
      <p className={styles.container__text}>{userNotFound.warning} </p>
    </div>
  );
};

export default UserNotFound;
