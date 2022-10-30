import { IssueContext } from "@/lib/store/IssueContextProvider";
import AdImage from "../AdImage";
import IssueItem from "../IssueItem";
import LoadingBar from "../LoadingBar";
import { IssueListWrapper } from "./styles";

const IssueList = () => {
  return (
    <IssueListWrapper>
      <IssueContext.Consumer>
        {({ issues, isLoading }) => {
          return (
            <>
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
              {isLoading && <LoadingBar />}
            </>
          );
        }}
      </IssueContext.Consumer>
    </IssueListWrapper>
  );
};

export default IssueList;
