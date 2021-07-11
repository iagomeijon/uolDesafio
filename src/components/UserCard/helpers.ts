export function onReposClicked(
  handleRepos: () => void,
  setListTitle: (value: string) => void,
): void {
  handleRepos();
  setListTitle('Repositórios:');
}

export function onStarredClicked(
  handleStarred: () => void,
  setListTitle: (value: string) => void,
): void {
  handleStarred();
  setListTitle('Starred:');
}
