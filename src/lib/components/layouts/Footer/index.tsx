import { FooterWrapper } from "./styles";
import { GoMarkGithub } from "react-icons/go";
const Footer = () => {
  return (
    <FooterWrapper>
      <p className="made-by">
        Made by <GoMarkGithub />{" "}
        <a
          href="https://github.com/wanted-pre-onboarding-fe-7th-team-4/wanted-assignment2"
          target="_blank"
          rel="noreferrer"
        >
          Team 4
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
