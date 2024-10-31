type License = {
  key: string | null;
  name: string | null;
  url: string | null;
  spdx_id: string | null;
  node_id: string | null;
  html_url: string | null;
};

type Owner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  received_events_url: string;
  type: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  site_admin: boolean;
}

export type Repository = {
  id: number;
  node_id: string | null;
  name: string;
  full_name: string | null;
  owner: Owner;
  private: boolean | null;
  html_url: string;
  description: string | null;
  fork: boolean | null;
  url: string | null;
  created_at: string | null;
  updated_at: string | null;
  pushed_at: string | null;
  homepage: string | null;
  size: number | null;
  stargazers_count: number;
  watchers_count: number | null;
  language: string | null;
  forks_count: number | null;
  open_issues_count: number | null;
  master_branch: string | null;
  default_branch: string | null;
  score: number | null;
  archive_url: string | null;
  assignees_url: string | null;
  blobs_url: string | null;
  branches_url: string | null;
  collaborators_url: string | null;
  comments_url: string | null;
  commits_url: string | null;
  compare_url: string | null;
  contents_url: string | null;
  contributors_url: string | null;
  deployments_url: string | null;
  downloads_url: string | null;
  events_url: string | null;
  forks_url: string | null;
  git_commits_url: string | null;
  git_refs_url: string | null;
  git_tags_url: string | null;
  git_url: string | null;
  issue_comment_url: string | null;
  issue_events_url: string | null;
  issues_url: string | null;
  keys_url: string | null;
  labels_url: string | null;
  languages_url: string | null;
  merges_url: string | null;
  milestones_url: string | null;
  notifications_url: string | null;
  pulls_url: string | null;
  releases_url: string | null;
  ssh_url: string | null;
  stargazers_url: string | null;
  statuses_url: string | null;
  subscribers_url: string | null;
  subscription_url: string | null;
  tags_url: string | null;
  teams_url: string | null;
  trees_url: string | null;
  clone_url: string | null;
  mirror_url: string | null;
  hooks_url: string | null;
  svn_url: string | null;
  forks: number | null;
  open_issues: number | null;
  watchers: number | null;
  has_issues: boolean | null;
  has_projects: boolean | null;
  has_pages: boolean | null;
  has_wiki: boolean | null;
  has_downloads: boolean | null;
  archived: boolean | null;
  disabled: boolean | null;
  visibility: string | null;
  license: Partial<License> | null;
}

export type SearchRepositoriesResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}

export type SimplifiedRepository = {
  id: number,
  name: string,
  html_url: string,
  stargazers_count: number,
  owner_login: string,
  owner_avatar_url: string,
  repository_language: string | null
}
