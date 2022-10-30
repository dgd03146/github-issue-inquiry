import IssueList from "@/components/IssueList";
import LoadingBar from "@/components/LoadingBar";
import useGetIssueList from "@/lib/hooks/useGetIssueList";
import useIntersect from "@/lib/hooks/useIntersection";
import {
  IssueListContextAPI,
  PageNumberContextAPI
} from "@/lib/store/IssueContextProvider";
import { useContext, useEffect } from "react";

import styled from "styled-components";

const Home = () => {
  const { page, setPage } = useContext(PageNumberContextAPI);
  const { setIssues } = useContext(IssueListContextAPI);
  const { isSuccess, isError, isFetching, isLoading, fetchDatas, data } =
    useGetIssueList();

  const map = () => {
    const issueList = data.map((issue) => ({
      id: issue?.id,
      number: issue?.number,
      title: issue?.title,
      user: {
        id: issue?.user?.id,
        login: issue?.user?.login,
        avatar_url: issue?.user?.avatar_url,
        url: issue?.user?.url
      },
      created_at: issue?.created_at,
      comments: issue?.comments
    }));
    setIssues((pre) => [...pre, ...issueList]);
  };

  const observerRef = useIntersect(
    async (entry, observer) => {
      if (!isFetching) {
        fetchDatas(page);
      }
      observer.unobserve(entry.target);
    },
    { threshold: 1.0 }
  );

  useEffect(() => {
    if (isSuccess) {
      setPage((pre) => pre + 1);
      map();
    }
  }, [isSuccess]);

  return (
    <div>
      {isError ? (
        <div>에러가 발생했습니다. 나중에 다시 시도해주세요.</div>
      ) : (
        <>
          <IssueList />
          {isLoading ? <LoadingBar /> : null}
          <Target ref={observerRef} />
        </>
      )}
    </div>
  );
};

export default Home;

const Target = styled.div`
  height: 1px;
`;
