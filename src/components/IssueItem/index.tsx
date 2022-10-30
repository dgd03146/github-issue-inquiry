import type { IIssue } from "@/lib/hooks/useIssueList";
import React, { useMemo, memo } from "react";
import { Link } from "react-router-dom";
import { IssueComments, IssueTitleWrapper, IssueWrapper } from "./styles";
import { GoComment } from "react-icons/go";

const IssueItem = ({ title, comments, created_at, number, author }: IIssue) => {
  const dateString = useMemo(() => {
    const date = new Date(created_at);
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
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
              href={`https://github.com/${author}`}
              className="author"
              target="_blank"
              rel="noreferrer"
            >
              @{author}
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
