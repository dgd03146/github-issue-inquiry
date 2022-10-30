import React, { useMemo, memo } from "react";
import { Link } from "react-router-dom";
import { IssueComments, IssueTitleWrapper, IssueWrapper } from "./styles";
import { GoComment } from "react-icons/go";

interface RepoListProps {
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

const IssueItem = ({
  title,
  comments,
  created_at,
  number,
  user
}: RepoListProps) => {
  const dateString = useMemo(() => {
    if (created_at) {
      const date = new Date(created_at);
      return `${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일`;
    }
  }, [created_at]);
  return (
    <IssueWrapper>
      <div>
        <IssueTitleWrapper>
          <div>
            <span className="issue-number">#{number}</span>
            <Link to={`/detail/${number}`} className="issue-title">
              {title}
            </Link>
          </div>
          <div className="issue-info">
            <a
              href={`https://github.com/${user?.login}`}
              className="author"
              target="_blank"
              rel="noreferrer"
            >
              @{user?.login}
            </a>
            <span className="date">{dateString}</span>
          </div>
        </IssueTitleWrapper>
        <IssueComments to={`/detail/${number}`}>
          <GoComment /> <span className="comment-number">{comments}</span>
        </IssueComments>
      </div>
    </IssueWrapper>
  );
};

export default memo(IssueItem);
