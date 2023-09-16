import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import { FaShoppingBasket } from "react-icons/fa";

export const Nav = styled.nav`
  color: Black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarContainerImg = styled.img`
  object-fit: cover;
  width: 11rem;

  @media screen and (max-width: 960px) {
    width: 9rem;
  }
`;

export const NavLogo = styled.div`
  color: #000000;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-top: 0.6rem;
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
  height: 70px;
  border-bottom: 2px solid transparent;

  @media screen and (max-width: 960px) {
    height: 40px;
    padding-right: 5px;
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

  @media screen and (max-width: 960px) {
    height 100%;
    width: 100%;
  }
`;

export const NavBtnBasketsSpan = styled.span`
  font-size: 1.4rem;
  color: #ffffff;

  &.animate {
    animation: pop 300ms ease-in-out;
  }

  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: none;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

export const ButtonMain = styled.button`
  background: #ffffff;
  color: #2168ed;
  border-radius: 4px;
  white-space: nowrap;
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    transition: all 0.3s ease-out;
    background: lightgray;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 8px 8px;
  }
`;
