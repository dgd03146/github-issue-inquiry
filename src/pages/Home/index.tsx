import IssueList from "@/lib/components/IssueList";
import useIssueList from "@/lib/hooks/useIssueList";
import { useCallback, useEffect } from "react";
let timeoutId: NodeJS.Timeout;

const Home = () => {
  const { loadMore, isEnd, isLoading } = useIssueList();

  const onScroll = useCallback(() => {
    if (!loadMore) return;
    clearTimeout(timeoutId);
    if (isEnd || isLoading) return;
    timeoutId = setTimeout(() => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 250
      ) {
        loadMore();
      }
    }, 300);
  }, [isEnd, isLoading, timeoutId, loadMore]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div>
      <IssueList />
    </div>
  );
};

export default Home;
