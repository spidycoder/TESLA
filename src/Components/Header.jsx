import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setOpen(true)} />
      </RightMenu>
      <BurgerNav show={open}>
        <CloseWrap>
          <CustomClose onClick={() => setOpen(false)} />
        </CloseWrap>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">CyberTruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  a {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  position: fixed;
  display: flex;
  margin-left: 420px;
  @media (max-width: 768px) {
    display: none;
  }
  flex: 1;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;

const RightMenu = styled.div`
  position: fixed;
  display: flex;
  margin-left: 1020px;
  align-items: center;
  justify-content: end;
  @media (max-width: 310px) {
    a {
      display: none;
    }
    margin-left: 236px;
  }
  @media (min-width: 311px) and (max-width: 768px) {
    a {
      display: none;
    }
  }
  @media (min-width: 769px) and (max-width: 1030px) {
    a {
      display: none;
    }
    margin-left: 951px;
  }
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  @media (max-width: 768px) {
    margin-right: 1950px;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
const BurgerNav = styled.div`
  background: white;
  width: 200px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  list-style: none;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(110%)")};
  transition: transform 0.2s;
  padding: 10px;
  li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;
