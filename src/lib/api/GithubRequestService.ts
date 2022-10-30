import { Octokit } from "@octokit/rest";
import { Endpoints } from "@octokit/types";

export type IssueListConfig =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["parameters"];
export type IssueConfig =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["parameters"];

class GithubRequestService {
  private octokit: Octokit;
  readonly owner: string;
  readonly repo: string;
  readonly per_page: number;
  private issueNumber: number;
  protected issueListConfig: IssueListConfig;
  protected issueConfig: IssueConfig;

  constructor(token: string, owner: string, repo: string) {
    this.octokit = new Octokit({
      auth: token,
      userAgent: "rieul-app v1"
    });
    this.owner = owner;
    this.repo = repo;
    this.per_page = 10;
    this.issueNumber = Infinity;
    this.issueListConfig = {
      owner: this.owner,
      repo: this.repo,
      state: "open",
      per_page: this.per_page,
      page: 1,
      sort: "comments",
      direction: "desc"
    };
    this.issueConfig = {
      owner: this.owner,
      repo: this.repo,
      issue_number: this.issueNumber
    };
  }

  async getIssueList(page: number, per_page: number) {
    return await this.octokit.issues.listForRepo({
      ...this.issueListConfig,
      page,
      per_page
    });
  }

  async getIssue(issue_number: number) {
    return await this.octokit.issues.get({
      ...this.issueListConfig,
      issue_number
    });
  }
}

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN as string;

export default new GithubRequestService(TOKEN, "angular", "angular-cli");
