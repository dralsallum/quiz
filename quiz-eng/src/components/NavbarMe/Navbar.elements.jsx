import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { FaShoppingBasket } from "react-icons/fa";

export const Nav = styled.nav`
  color: Black;
  background-color: #ffffff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${Container}
`;

export const NavbarContainerImg = styled.img`
  object-fit: cover;
  width: 11rem;
`;

export const NavbarLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  padding-top: 1rem;
`;

export const NavLogo = styled(Link)`
  color: #000000;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
`;
export const NavItemBasket = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
`;

export const NavLinks = styled(Link)`
  color: Black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
`;

export const NavItemBtn = styled.li`

  }
`;

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height 100%;
width: 100%;
border: none;
outline: none;


`;

export const NavBtnBaskets = styled(FaShoppingBasket)`
  text-decoration: none;
  border: none;
  height 50%;
  width: 100%;
  outline: none;
  cursor: pointer;
  margin: 0.2rem;
`;
export const NavBtnBasketsSpan = styled.span`
  font-size: 1.4rem;
`;

export const ButtonContainer = styled.div`
  display: none;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;
