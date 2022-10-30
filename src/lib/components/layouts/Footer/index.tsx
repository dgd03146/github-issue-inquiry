import { FooterWrapper } from "./styles";
import { GoMarkGithub } from "react-icons/go";
const Footer = () => {
  return (
    <FooterWrapper>
      <p className="made-by">
        Made by
        <a href="https://github.com/rieulp" target="_blank" rel="noreferrer">
          <GoMarkGithub /> RieulP
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
