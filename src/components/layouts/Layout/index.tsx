import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import MoveTopButton from "../MoveTopButton";
import { LayoutContentWrapper, LayoutWrapper } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header>Angular / Angular-cli</Header>
      <LayoutContentWrapper>
        <Outlet />
      </LayoutContentWrapper>
      <Footer />
      <MoveTopButton />
    </LayoutWrapper>
  );
};

export default Layout;
