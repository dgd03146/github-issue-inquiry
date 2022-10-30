import { octokit } from "@/lib/api/octokit";
import { IIssue } from "@/lib/hooks/useIssueList";
import { useCallback, useEffect } from "react";
import { createContext, useState } from "react";

export interface IIssueDetail extends IIssue {
  author_url: string; // 작성자
  body?: string | null;
}

interface IssueContext {
  isEnd: boolean;
  isLoading: boolean;
  issues?: IIssue[][];
  setIssues?: React.Dispatch<React.SetStateAction<IIssue[][]>>;
  loadMore?: () => void;
  // details: Map<number, IIssueDetail>;
  getDetailData?: (issue_number: string) => Promise<IIssueDetail | undefined>;
}

interface Props {
  children: React.ReactNode;
}

const PER_PAGE = 20;

export const IssueContext = createContext<IssueContext>({
  isEnd: false,
  isLoading: false
  // details: new Map<number, IIssueDetail>()
});

const IssueContextProvider = ({ children }: Props) => {
  const [issues, setIssues] = useState<IIssue[][]>([]);
  const [isNeededUpdate, setNeededUpdate] = useState(true);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setLoading] = useState(false);
  const [isEnd, setEnd] = useState(false);
  const [details, setDetails] = useState(new Map<string, IIssueDetail>());

  useEffect(() => {
    if (!isNeededUpdate) return;
    const getData = async () => {
      setLoading(true);
      await octokit.rest.issues
        .listForRepo({
          owner: "angular",
          repo: "angular-cli",
          per_page: PER_PAGE,
          page: page + 1,
          state: "open",
          sort: "comments"
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data.length < PER_PAGE) setEnd(true);
            else {
              const data: IIssue[] = [];
              res.data.forEach(
                ({ url, title, number, comments, created_at, user }) => {
                  if (user) {
                    const { login } = user;
                    data.push({
                      title,
                      number,
                      comments,
                      created_at,
                      author: login
                    });
                  }
                }
              );

              setIssues((prev) => {
                return JSON.parse(JSON.stringify([...prev, data]));
              });
              setPage((prev) => prev + 1);
            }
          }
        })
        .catch((err) => {
          // TODO : 에러처리
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          setNeededUpdate(false);
        });
    };

    if (!isEnd && !isLoading) getData();
  }, [isNeededUpdate]);

  const getDetailData = useCallback(async (issue_number: string) => {
    if (!details.has(issue_number)) {
      await octokit.rest.issues
        .get({
          owner: "angular",
          repo: "angular-cli",
          issue_number: parseInt(issue_number, 10)
        })
        .then((res) => {
          if (res.status === 200) {
            const { number, title, user, created_at, comments, body } =
              res.data;
            if (user) {
              const { avatar_url, name, login } = user;
              console.log({
                number,
                title,
                avatar_url,
                name,
                login,
                created_at,
                comments,
                body
              });

              details.set(issue_number, {
                author: login,
                author_url: avatar_url,
                body,
                comments,
                created_at,
                number: number,
                title
              });
              return details.get(issue_number);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return details.get(issue_number);
  }, []);

  const loadMore = useCallback(() => {
    setNeededUpdate(true);
  }, [page, issues, setPage, setNeededUpdate]);

  const value = {
    isEnd,
    isLoading,
    issues,
    setIssues,
    loadMore,
    // details,
    getDetailData
  };

  return (
    <IssueContext.Provider value={value}>{children}</IssueContext.Provider>
  );
};

export default IssueContextProvider;
