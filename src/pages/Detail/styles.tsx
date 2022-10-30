import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  gap: 16px;
  align-items: center;

  & .title {
    font-size: 28px;
    font-weight: 600;
    display: inline-block;
    /* line-height: 32px; */
  }

  & .issue-number {
    color: gray;
  }

  & .info {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 5px;
  }
  & .author {
    color: white;
    display: inline-block;
    font-size: 16px;
    line-height: 20px;
    padding-left: 4px;
    background-color: gray;
    padding: 2px 6px;
    border-radius: 5px;
  }

  & .comments {
    color: #57606a;
    font-weight: 600;
  }
`;

export const UserWrapper = styled.div`
  text-align: center;
  & .user_avatar {
    width: 70px;
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 6px;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px #1b1f2426;
    border-radius: 50% !important;

    & img {
      width: 100%;
      vertical-align: middle;
    }
  }
`;

export const ContentWrapper = styled.div`
  border-top: 2px lightgray solid;
  margin: 1rem auto;
  max-width: 1280px;
  padding: 2rem 1rem;
`;
