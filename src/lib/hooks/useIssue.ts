import { IIssueDetail, IssueContext } from "@/lib/store/IssueContextProvider";
import { useContext, useEffect, useState } from "react";

const useIssue = (issue_number: string) => {
  const [issue, setIssue] = useState<IIssueDetail>();
  const { getDetailData } = useContext(IssueContext);

  useEffect(() => {
    getDetailData?.(issue_number)
      .then((value) => {
        if (value) setIssue(value);
      })
      .catch((err) => null);
  }, [getDetailData, issue_number]);

  return { issue };
};

export default useIssue;
