export interface UserCardProps {
  user: User;
  repositories: Repository[];
  handleRepos: () => void;
  handleStarred: () => void;
  isLoading: boolean;
}
