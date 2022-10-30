import IssueList from "@/components/IssueList";
import useIntersect from "@/lib/hooks/useIntersection";
import useIssueList from "@/lib/hooks/useIssueList";
import styled from "styled-components";

const Home = () => {
  const { loadMore, isEnd, isLoading } = useIssueList();

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (!loadMore) return;
    if (!isEnd && !isLoading) loadMore();
  });

  return (
    <div>
      <IssueList />
      <Target ref={ref} />
    </div>
  );
};

export default Home;

const Target = styled.div`
  height: 1px;
`;
