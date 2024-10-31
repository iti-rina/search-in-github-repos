import axios, { AxiosResponse } from 'axios';
import { SearchRepositoriesResponse } from './types';

type SortParamsType = 'stars' | 'forks' | 'help-wanted-issues' | 'updated' | '';

export async function fetchGithubRepos(searchQuery: string, sort: SortParamsType = ''): Promise<AxiosResponse<SearchRepositoriesResponse>> {
  try {
    const response = await axios.get<SearchRepositoriesResponse>('https://api.github.com/search/repositories', {
      params: {
        q: searchQuery,
        sort: sort
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}