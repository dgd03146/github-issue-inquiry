import { HeaderWrapper } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <HeaderWrapper>
      <h1 className="title">{children}</h1>
    </HeaderWrapper>
  );
};

export default Header;
