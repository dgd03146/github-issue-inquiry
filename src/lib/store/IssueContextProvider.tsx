import { createContext, ReactNode, useState } from "react";

export interface RepoListProps {
  number?: number;
  id?: number;
  title?: string;
  user?: {
    id?: number;
    login?: string;
    avatar_url?: string;
    url?: string;
  };
  created_at?: string;
  comments?: number;
}

interface RepoDetailProps extends RepoListProps {
  body: string;
}

interface IssueListContextAPIProps {
  issues?: RepoListProps[];
  setIssues: React.Dispatch<React.SetStateAction<RepoListProps[]>>;
}

interface IssueDetailContextAPIProps {
  detail?: RepoDetailProps;
  setDetail: React.Dispatch<React.SetStateAction<RepoDetailProps>>;
}
export const IssueListContextAPI = createContext<IssueListContextAPIProps>(
  null!
);
export const IssueDetailContextAPI = createContext<IssueDetailContextAPIProps>(
  null!
);

interface PageNumberContextAPIProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PageNumberContextAPI = createContext<PageNumberContextAPIProps>(
  null!
);

interface ContextAPIProps {
  children: ReactNode;
}

const detailDefaultValue = {
  number: 0,
  id: 0,
  title: "",
  user: {
    id: 0,
    login: "",
    avatar_url: "",
    url: ""
  },
  created_at: "",
  comments: 0,
  body: ""
};

export const ContextAPIProvider = ({ children }: ContextAPIProps) => {
  const [issues, setIssues] = useState<RepoListProps[]>([]);
  const [detail, setDetail] = useState<RepoDetailProps>(detailDefaultValue);
  const [page, setPage] = useState(1);

  const issueValue = {
    issues,
    setIssues
  };

  const detailValue = {
    detail,
    setDetail
  };

  const pageValue = {
    page,
    setPage
  };

  return (
    <IssueListContextAPI.Provider value={issueValue}>
      <IssueDetailContextAPI.Provider value={detailValue}>
        <PageNumberContextAPI.Provider value={pageValue}>
          {children}
        </PageNumberContextAPI.Provider>
      </IssueDetailContextAPI.Provider>
    </IssueListContextAPI.Provider>
  );
};
