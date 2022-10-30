import styled from "styled-components";
import { Link } from "react-router-dom";

export const IssueWrapper = styled.li`
  border-top: 1px solid #d8dee4;
  &:first-child {
    border-top-color: transparent;
  }
  & > div {
    display: flex;
    position: relative;
    align-items: center;
  }
`;

export const IssueTitleWrapper = styled.div`
  word-wrap: break-word;
  padding: 8px;
  flex: 1;
  line-height: 24px;
  gap: 8px;

  & .issue-number {
    display: inline-block;
    color: gray;
    margin-right: 10px;
    font-size: 16px;
    min-width: 50px;
    vertical-align: middle;
  }
  & .issue-title {
    font-weight: 600;
    font-size: 16px;
    vertical-align: middle;

    &:hover {
      color: #0969da;
    }
  }

  & .issue-info {
    margin-top: 4px;
    display: flex;
    color: #57606a;
    font-size: 13px;
    line-height: 20px;
    gap: 10px;

    & .author {
      font-weight: 600;
    }
  }
`;
export const IssueComments = styled(Link)`
  padding-right: 1rem;
  color: #57606a;
  font-weight: 600;

  &:hover {
    color: #0969da;
  }

  & svg {
    font-size: 18px;
    vertical-align: middle;
    margin-right: 6px;
  }

  & .comment-number {
    vertical-align: middle;
    font-size: 16px;
  }
`;
