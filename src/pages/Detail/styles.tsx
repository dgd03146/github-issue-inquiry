import theme from "@/lib/styles/theme";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  gap: 16px;
  align-items: center;
  position: relative;

  & .title {
    font-size: 28px;
    font-weight: 600;
    display: inline-block;
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

  @media ${theme.device.tablet} {
    padding: 0.8rem 0.5rem;

    & .title {
      font-size: 24px;
      line-height: 27px;
    }

    & .info {
      gap: 8px;
    }

    & .author {
      font-size: 14px;
      line-height: 16px;
      padding: 2px 5px;
      border-radius: 5px;
    }

    & .comments {
      color: #57606a;
      font-weight: 600;
    }
  }

  @media ${theme.device.mobile} {
    gap: 0;

    & .title {
      font-size: 20px;
      line-height: 23px;
      padding-left: 60px;
    }
    & .author {
      font-size: 12px;
    }
    & .info {
      font-size: 12px;
    }
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
    border-radius: 50% !important;

    & img {
      width: 100%;
      vertical-align: middle;
    }

    @media ${theme.device.tablet} {
      width: 60px;
    }

    @media ${theme.device.mobile} {
      width: 40px;
      position: absolute;
      top: 19px;
      left: 1rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  border-top: 2px lightgray solid;
  margin: 1rem auto;
  max-width: 1280px;
  padding: 2rem 1rem;
`;
