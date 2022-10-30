import { IssueListContextAPI } from "@/lib/store/IssueContextProvider";
import { useContext } from "react";
import AdImage from "../AdImage";
import IssueItem from "../IssueItem";

const IssueList = () => {
  const { issues } = useContext(IssueListContextAPI);

  return (
    <ul>
      {issues?.flat().map((issue, index) =>
        index === 4 ? (
          <>
            <AdImage />
            <IssueItem key={issue.number} {...issue} />
          </>
        ) : (
          <IssueItem key={issue.number} {...issue} />
        )
      )}
    </ul>
  );
};

export default IssueList;
