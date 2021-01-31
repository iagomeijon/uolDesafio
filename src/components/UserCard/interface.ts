import { User } from '@core/hooks/useGitHub/interface';

export interface UserCardProps {
  user: User;
  handdleRepos: () => void;
  handleStarred: () => void;
}
