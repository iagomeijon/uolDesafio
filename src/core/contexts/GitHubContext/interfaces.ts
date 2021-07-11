export interface GitHubContextInterface {
  isLoading?: boolean;
  user?: User;
  hasUserNotFound: boolean;
  repositories?: Repository[];
  isLoadingSearch?: boolean;
  getUser?(userSearch: string): void;
  getRepositoriesList?(): void;
  getStarredList?(): void;
}
