import { IssueContext } from "@/lib/store/IssueContextProvider";
import { useContext } from "react";

export interface IUser {
  avatar_url: string;
  id: number;
  login: string;
  node_id: string;
}

export interface IIssue {
  // url: string; // 이슈 링크
  title: string; // 이슈제목
  number: number; // 이슈 번호
  comments: number; // 코멘트 수
  created_at: string; // 작성일
  author: string; // 작성자
}

const useIssueList = () => {
  const { loadMore, isEnd, isLoading, issues } = useContext(IssueContext);

  return { loadMore, isEnd, isLoading, issues };
};

export default useIssueList;
