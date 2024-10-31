import { makeAutoObservable, runInAction } from 'mobx';
import { fetchGithubRepos } from '../api/fetchGithubRepos';
import type { SimplifiedRepository } from '../api/types';

class Repository {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  owner_login: string;
  owner_avatar_url: string;
  repository_language: string | null;

  constructor(data: SimplifiedRepository) {
    this.id = data.id;
    this.name = data.name;
    this.html_url = data.html_url;
    this.stargazers_count = data.stargazers_count;
    this.owner_login = data.owner_login;
    this.owner_avatar_url = data.owner_avatar_url;
    this.repository_language = data.repository_language;
  }
}

class GithubReposStore {
  repositories: Repository[] = []
  isLoading = false;

  currentPage = 1;
  totalPages = 0;
  perPage = 30;
  hasMore = true;
  searchQuery = 'typescript';
  GITHUB_LIMITS = 1000;

  constructor() {
    makeAutoObservable(this);
  }

  getRepositories = async () => {
    if (this.isLoading || !this.hasMore) return;

    this.isLoading = true;

    try {
      const response = await fetchGithubRepos(this.searchQuery, this.currentPage);
      runInAction(() => {
        const newRepositories = response.simplifiedRepositories.map((repoData) => new Repository(repoData))
        this.repositories = [...this.repositories, ...newRepositories];
        
        const totalCount = Math.min(response.total_count, this.GITHUB_LIMITS);
        this.totalPages = Math.ceil(totalCount / this.perPage);

        this.currentPage += 1;
        this.hasMore = this.currentPage <= this.totalPages;
        this.isLoading = false;
      })
    } catch(error) {
      runInAction(() => {
        this.isLoading = false;
      });
      console.error('Error fetching repositories:', error);
    }
  }

  getRepositoryById(id: number) {
    return this.repositories.find((repo) => repo.id === id);
  }

  updateRepository(id: number, updatedData: Partial<SimplifiedRepository>) {
    const repo = this.repositories.find((repo) => repo.id === id);
    if (repo) {
      runInAction(() => {
        Object.assign(repo, updatedData);
      });
    }
  }

  setSearchQuery(searchQuery: string) {
    runInAction(() => {
      this.searchQuery = searchQuery
    })
  }

  searchRepositories(query: string) {
    runInAction(() => {
      this.setSearchQuery(query);
      this.repositories = [];
      this.currentPage = 1;
      this.hasMore = true;
      this.getRepositories();
    })
  }

  deleteRepository(id: number) {
    runInAction(() => {
      this.repositories = this.repositories.filter(repo => repo.id !== id);
    });
  }
}

export default new GithubReposStore();