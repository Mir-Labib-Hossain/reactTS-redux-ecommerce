import React from "react";
import { Header } from "../../styles/common.styled";
import { NavWrapper } from "./styled";
const NavbarView: React.FC = () => {
  return (
    <NavWrapper>
      <Header fontSize="20px">FakeShop</Header>
    </NavWrapper>
  );
};
export default NavbarView;
