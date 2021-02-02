import { Repository } from '@core/hooks/useGitHub/interface';

export interface RepositoryListProps {
  list: Repository[];
  listTitle: string;
}
