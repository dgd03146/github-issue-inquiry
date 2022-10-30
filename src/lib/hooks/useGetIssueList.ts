import { Endpoints } from "@octokit/types";
import { useState } from "react";
import GithubRequestService from "../api/GithubRequestService";

type ReposResponse = Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];

const useGetIssueList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<ReposResponse["data"]>([]);

  const fetchDatas = async (page = 0) => {
    setIsFetching(true);
    setIsSuccess(null);
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await GithubRequestService.getIssueList(page, 20);
      setIsFetching(false);
      setIsSuccess(true);
      setIsLoading(false);
      setData(response.data);
      return;
    } catch (e) {
      setIsError(true);
      setIsSuccess(true);
      setIsLoading(false);
      setIsFetching(false);
      setData([]);
    }
  };

  return { isSuccess, isError, isFetching, isLoading, fetchDatas, data };
};

export default useGetIssueList;
