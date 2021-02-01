import { User, Repository } from '@core/hooks/useGitHub/interface';

export interface UserCardProps {
  user: User;
  repositories: Repository[];
  handdleRepos: () => void;
  handleStarred: () => void;
}
