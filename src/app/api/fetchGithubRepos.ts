import axios from 'axios';
import { SimplifiedRepository, SearchRepositoriesResponse } from './types';

type SortParamsType = 'stars' | 'forks' | 'help-wanted-issues' | 'updated' | '' |undefined;
type PromiseValue = {
  simplifiedRepositories: SimplifiedRepository[];
  total_count: number
}

export async function fetchGithubRepos(searchQuery: string, currentPage: number = 1, perPage: number = 30,  sort: SortParamsType = ''): Promise<PromiseValue> {
  try {
    const response = await axios.get<SearchRepositoriesResponse>('https://api.github.com/search/repositories', {
      headers: {
        // Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
      },
      params: {
        q: searchQuery,
        per_page: perPage,
        page: currentPage,
        sort: sort
      },
    });
    const repositories = response.data.items;
    const simplifiedRepositories = repositories.map((repo) => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      owner_login: repo.owner.login,
      owner_avatar_url: repo.owner.avatar_url,
      repository_language: repo.language
    }));
    return {simplifiedRepositories, total_count: response.data.total_count};
  } catch (error) {
    console.error(error);
    throw error;
  }
}