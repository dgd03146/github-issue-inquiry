import styled from "styled-components";

export const CodeBlockWrapper = styled.div`
  position: relative;

  &:hover .copy_button,
  .copy_button:hover {
    background: linear-gradient(47deg, #282a36 3%, #ffffff75 133%);
    color: white;
  }

  & .copy_button {
    position: absolute;
    right: 10px;
    top: 10px;
    background: transparent;
    border: 1px solid #282a36;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    vertical-align: middle;
    cursor: pointer;
    color: transparent;

    &:active {
      background: black;
      color: white;
      transform: translateY(1px);
    }
  }
`;

export const InlineCodeWrapper = styled.code`
  line-height: normal;
  background: rgba(135, 131, 120, 0.15);
  color: #eb5757;
  border-radius: 3px;
  font-size: 85%;
  padding: 0.2em 0.4em;
  font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
    Courier, monospace;
`;
