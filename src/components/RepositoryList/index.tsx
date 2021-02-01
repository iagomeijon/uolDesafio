import { RepositoryListProps } from './interface';
import styles from './styles.module.scss';

const RepositoryList = (props: RepositoryListProps) => {
  const { list } = props;

  return (
    <div className={styles.container}>
      <p className={styles.container__title}>Repositórios:</p>
      {list.length > 0 ? (
        <ul>
          {list.map((_repository, index) => {
            return (
              <a
                key={index}
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
        <p>Sem repositórios encontrados :( </p>
      )}
    </div>
  );
};

export default RepositoryList;
