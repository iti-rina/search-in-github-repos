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
  // repositories: Repository[] = []
  repositories: SimplifiedRepository[] = [{"id":259617340,"name":"TypeScriptAssignment","html_url":"https://github.com/Dalma0410/TypeScriptAssignment","stargazers_count":0,"owner_login":"Dalma0410","owner_avatar_url":"https://avatars.githubusercontent.com/u/57350184?v=4","repository_language":null},{"id":149601522,"name":"TypeScriptEventHandling","html_url":"https://github.com/andersbor/TypeScriptEventHandling","stargazers_count":0,"owner_login":"andersbor","owner_avatar_url":"https://avatars.githubusercontent.com/u/3588189?v=4","repository_language":"JavaScript"},{"id":584482313,"name":"typescript-II-exercicios","html_url":"https://github.com/labenuexercicios/typescript-II-exercicios","stargazers_count":0,"owner_login":"labenuexercicios","owner_avatar_url":"https://avatars.githubusercontent.com/u/108153028?v=4","repository_language":null},{"id":475538123,"name":"exercicios-backend-typescript-tipos-dados-2","html_url":"https://github.com/cubos-academy/exercicios-backend-typescript-tipos-dados-2","stargazers_count":0,"owner_login":"cubos-academy","owner_avatar_url":"https://avatars.githubusercontent.com/u/64142676?v=4","repository_language":null},{"id":53420842,"name":"adbrain-typescript-definitions","html_url":"https://github.com/MaxwellADN/adbrain-typescript-definitions","stargazers_count":0,"owner_login":"MaxwellADN","owner_avatar_url":"https://avatars.githubusercontent.com/u/11523079?v=4","repository_language":"TypeScript"},{"id":53164482,"name":"sitepoint_projectcode_chrome-extension-angular-typescript","html_url":"https://github.com/Fischaela/sitepoint_projectcode_chrome-extension-angular-typescript","stargazers_count":0,"owner_login":"Fischaela","owner_avatar_url":"https://avatars.githubusercontent.com/u/3409561?v=4","repository_language":"JavaScript"},{"id":199247874,"name":"modern-monorepo-boilerplate","html_url":"https://github.com/ranglang/modern-monorepo-boilerplate","stargazers_count":0,"owner_login":"ranglang","owner_avatar_url":"https://avatars.githubusercontent.com/u/12862508?v=4","repository_language":"HTML"},{"id":293426887,"name":"Typescript101","html_url":"https://github.com/FrontendCrashCourseHSE2020/Typescript101","stargazers_count":0,"owner_login":"FrontendCrashCourseHSE2020","owner_avatar_url":"https://avatars.githubusercontent.com/u/70875943?v=4","repository_language":"TypeScript"},{"id":170703913,"name":"typescript","html_url":"https://github.com/tommy-sjava/typescript","stargazers_count":0,"owner_login":"tommy-sjava","owner_avatar_url":"https://avatars.githubusercontent.com/u/47555791?v=4","repository_language":null},{"id":415436423,"name":"vercel-typescript-ddd-api","html_url":"https://github.com/cloneforyou/vercel-typescript-ddd-api","stargazers_count":0,"owner_login":"cloneforyou","owner_avatar_url":"https://avatars.githubusercontent.com/u/42023311?v=4","repository_language":null},{"id":598296748,"name":"passport-typescript-lab","html_url":"https://github.com/adhanji8/passport-typescript-lab","stargazers_count":0,"owner_login":"adhanji8","owner_avatar_url":"https://avatars.githubusercontent.com/u/55081439?v=4","repository_language":"TypeScript"},{"id":556612627,"name":"typescript","html_url":"https://github.com/baumeister25/typescript","stargazers_count":0,"owner_login":"baumeister25","owner_avatar_url":"https://avatars.githubusercontent.com/u/40074245?v=4","repository_language":"JavaScript"},{"id":508183941,"name":"viking-typescript","html_url":"https://github.com/Femtech-FactoriaF5/viking-typescript","stargazers_count":0,"owner_login":"Femtech-FactoriaF5","owner_avatar_url":"https://avatars.githubusercontent.com/u/102663566?v=4","repository_language":"TypeScript"},{"id":848572556,"name":"typescript-workshop","html_url":"https://github.com/teddzyb/typescript-workshop","stargazers_count":0,"owner_login":"teddzyb","owner_avatar_url":"https://avatars.githubusercontent.com/u/67263400?v=4","repository_language":"JavaScript"},{"id":622597944,"name":"p2-typescript-2023","html_url":"https://github.com/full-stack-bcn/p2-typescript-2023","stargazers_count":0,"owner_login":"full-stack-bcn","owner_avatar_url":"https://avatars.githubusercontent.com/u/60578177?v=4","repository_language":"TypeScript"},{"id":488216744,"name":"primeiro-projeto-frontend-typescript-projeto","html_url":"https://github.com/cubos-academy/primeiro-projeto-frontend-typescript-projeto","stargazers_count":0,"owner_login":"cubos-academy","owner_avatar_url":"https://avatars.githubusercontent.com/u/64142676?v=4","repository_language":"HTML"},{"id":576423089,"name":"WhatsTypescript","html_url":"https://github.com/ZCW-Java8-2/WhatsTypescript","stargazers_count":0,"owner_login":"ZCW-Java8-2","owner_avatar_url":"https://avatars.githubusercontent.com/u/116208701?v=4","repository_language":"HTML"},{"id":627487450,"name":"WhatsTypescript","html_url":"https://github.com/ZCW-Cohort-94/WhatsTypescript","stargazers_count":0,"owner_login":"ZCW-Cohort-94","owner_avatar_url":"https://avatars.githubusercontent.com/u/126481128?v=4","repository_language":"HTML"},{"id":79287233,"name":"typescript-examples","html_url":"https://github.com/judithrg252/typescript-examples","stargazers_count":0,"owner_login":"judithrg252","owner_avatar_url":"https://avatars.githubusercontent.com/u/11233992?v=4","repository_language":"TypeScript"},{"id":591317080,"name":"github-recitation-ts","html_url":"https://github.com/CMU-313/github-recitation-ts","stargazers_count":0,"owner_login":"CMU-313","owner_avatar_url":"https://avatars.githubusercontent.com/u/4871391?v=4","repository_language":"TypeScript"},{"id":113194259,"name":"ZCW-Interview-Problem6-TypeScript","html_url":"https://github.com/Zipcoder/ZCW-Interview-Problem6-TypeScript","stargazers_count":0,"owner_login":"Zipcoder","owner_avatar_url":"https://avatars.githubusercontent.com/u/13836040?v=4","repository_language":null},{"id":102511621,"name":"TypeScript-Node.js-REST-example","html_url":"https://github.com/nairihar/TypeScript-Node.js-REST-example","stargazers_count":0,"owner_login":"nairihar","owner_avatar_url":"https://avatars.githubusercontent.com/u/15065065?v=4","repository_language":"TypeScript"},{"id":339029004,"name":"alternance_typescript_intro","html_url":"https://github.com/jeanbaptistevilain/alternance_typescript_intro","stargazers_count":0,"owner_login":"jeanbaptistevilain","owner_avatar_url":"https://avatars.githubusercontent.com/u/651067?v=4","repository_language":null},{"id":110905763,"name":"typescript-template-datasource","html_url":"https://github.com/sanjeevshrestha/typescript-template-datasource","stargazers_count":0,"owner_login":"sanjeevshrestha","owner_avatar_url":"https://avatars.githubusercontent.com/u/227963?v=4","repository_language":"TypeScript"},{"id":63257516,"name":"angular2-typescript","html_url":"https://github.com/rehaddad/angular2-typescript","stargazers_count":0,"owner_login":"rehaddad","owner_avatar_url":"https://avatars.githubusercontent.com/u/4712577?v=4","repository_language":"TypeScript"},{"id":12688061,"name":"meteor-typescript-compiler","html_url":"https://github.com/jasonparekh/meteor-typescript-compiler","stargazers_count":0,"owner_login":"jasonparekh","owner_avatar_url":"https://avatars.githubusercontent.com/u/475137?v=4","repository_language":"JavaScript"},{"id":64133988,"name":"Ordina-JWorks-TypeScript","html_url":"https://github.com/KevinVHoutte/Ordina-JWorks-TypeScript","stargazers_count":0,"owner_login":"KevinVHoutte","owner_avatar_url":"https://avatars.githubusercontent.com/u/3090371?v=4","repository_language":null},{"id":315280139,"name":"typescript-learning","html_url":"https://github.com/bch-fullstack/typescript-learning","stargazers_count":0,"owner_login":"bch-fullstack","owner_avatar_url":"https://avatars.githubusercontent.com/u/48469453?v=4","repository_language":"TypeScript"},{"id":392229170,"name":"Week14_Day03_WarmUp-TypeScript","html_url":"https://github.com/Tuwaiq-NET01/Week14_Day03_WarmUp-TypeScript","stargazers_count":0,"owner_login":"Tuwaiq-NET01","owner_avatar_url":"https://avatars.githubusercontent.com/u/84861024?v=4","repository_language":null},{"id":524222885,"name":"WhatsTypescript","html_url":"https://github.com/ZCW-Java8-1/WhatsTypescript","stargazers_count":0,"owner_login":"ZCW-Java8-1","owner_avatar_url":"https://avatars.githubusercontent.com/u/107698122?v=4","repository_language":"HTML"}];
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
}

export default new GithubReposStore();