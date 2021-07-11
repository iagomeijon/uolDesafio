// MARK: Hooks
import useStrings from '@core/hooks/useStrings';
// MARK: Interfaces
import { RepositoryListProps } from './interface';
// MARK: Styles
import styles from './styles.module.scss';

const RepositoryList = (props: RepositoryListProps) => {
  const { list, listTitle } = props;
  const { strings } = useStrings();
  const { repositoryList } = strings.components;

  return (
    <div className={styles.container}>
      <p className={styles.container__title}>{listTitle}</p>
      {list.length > 0 ? (
        <ul>
          {list.map((_repository, index) => {
            return (
              <a
                key={`repository${index}`}
                href={_repository.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <li>{_repository.name}</li>
              </a>
            );
          })}
        </ul>
      ) : (
        <p>{repositoryList.notFounded} </p>
      )}
    </div>
  );
};

export default RepositoryList;
