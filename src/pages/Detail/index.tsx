import LoadingBar from "@/components/LoadingBar";
import Markdown from "@/components/Markdown";

import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ContentWrapper, TitleWrapper, UserWrapper } from "./styles";

import useGetDetail from "@/lib/hooks/useGetIssue";

const Detail = () => {
  const { issue_number } = useParams();
  const { isSuccess, isLoading, fetchData, data } = useGetDetail();

  const dateString = useMemo(() => {
    if (!data) return "";
    const date = new Date(data.created_at);
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  }, [data]);

  useEffect(() => {
    if (issue_number) {
      fetchData(Number(issue_number));
    }
  }, []);

  if (isLoading) {
    return <LoadingBar />;
  }
  if (!isSuccess) return <div>데이터 없음</div>;
  return (
    <div>
      <TitleWrapper>
        <UserWrapper>
          <div className="user_avatar">
            <img src={data?.user?.avatar_url} />
          </div>
        </UserWrapper>
        <div>
          <h1 className="title">
            <span className="issue-number">#{data?.number}</span> {data?.title}
          </h1>
          <div className="info">
            <a
              href={`https://github.com/${data?.user?.login}`}
              className="author"
              target="_blank"
              rel="noreferrer"
            >
              @{data?.user?.login}
            </a>
            <span className="date">{dateString}</span>

            <div className="comments">
              <span className="comment-number">{data?.comments} </span>
              comments
            </div>
          </div>
        </div>
      </TitleWrapper>
      <ContentWrapper>
        <Markdown content={data?.body || ""} />
      </ContentWrapper>
    </div>
  );
};

export default Detail;
