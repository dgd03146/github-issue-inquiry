import LoadingBar from "@/lib/components/LoadingBar";
import Markdown from "@/lib/components/Markdown";
import useIssue from "@/lib/hooks/useIssue";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentWrapper, TitleWrapper, UserWrapper } from "./styles";
import { GoComment } from "react-icons/go";

const Detail = () => {
  const { id } = useParams();
  if (!id) return <div>데이터 없음</div>;
  const { issue } = useIssue(id);

  const dateString = useMemo(() => {
    if (!issue) return "";
    const date = new Date(issue.created_at);
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  }, [issue]);

  if (!issue) return <LoadingBar />;
  return (
    <div>
      <TitleWrapper>
        <UserWrapper>
          <div className="user_avatar">
            <img src={issue.author_url} />
          </div>
        </UserWrapper>
        <div>
          <h1 className="title">
            <span className="issue-number">#{issue.number}</span> {issue.title}
          </h1>
          <div className="info">
            <a
              href={`https://github.com/${issue.author}`}
              className="author"
              target="_blank"
              rel="noreferrer"
            >
              @{issue.author}
            </a>
            <span className="date">{dateString}</span>

            <div className="comments">
              <span className="comment-number">{issue.comments} </span>
              comments
            </div>
          </div>
        </div>
      </TitleWrapper>
      <ContentWrapper>
        <Markdown content={issue.body || ""} />
      </ContentWrapper>
    </div>
  );
};

export default Detail;
