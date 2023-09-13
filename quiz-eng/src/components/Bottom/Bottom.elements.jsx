import styled from "styled-components";

export const NavHeader = styled.header`
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -0.4375rem 0.5625rem -0.4375rem #d6dee6;
  display: block;
`;
export const NavHeaderSub = styled.div`
  position: relative;
  z-index: 1;
`;
export const NavWrapper = styled.nav`
  border-bottom: 1px solid rgb(218, 225, 234);
  border-top-color: rgb(218, 225, 234);
  border-right-color: rgb(218, 225, 234);
  border-left-color: rgb(218, 225, 234);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 0.5rem 1rem;

  @media screen and (max-width: 50em) {
    height: 3rem;
    padding: 0.5rem;
  }
`;

export const NavContanier = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.25rem;
  flex: 0 0 auto;
  margin-left: 0;
  cursor: pointer;

  @media screen and (max-width: 50em) {
    max-width: 5rem;
    margin-right: 0.5rem;
  }
`;
export const NavContanierLogoMain = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  @media screen and (max-width: 50em) {
  }
`;
export const NavContanierLogoMainSpan = styled.span`
  display: inline-block;
  cursor: pointer;
`;
export const NavContanierLogoMainSvg = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  fill: inherit;
`;
export const NavContanierLogoMainimg = styled.img`
  width: 100px;
  height: 100%;
`;

export const NavContanierSec = styled.div`
  flex: 0 1 auto;
  min-width: 0;
  display: inline-flex;
  flex: 0 0 auto;

  @media screen and (max-width: 75em) {
    display: none;
  }
`;
export const NavContainerThi = styled.div`
  margin-left: auto;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
`;

export const NavrightFir = styled.div`
  overflow: hidden;
  height: 100%;
  margin: 0 0.5rem;

  @media screen and (max-width: 50rem) {
    display: none;
  }
`;
export const NavrightSec = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.25rem;
`;
export const NavrightSecSub = styled.div`
  font-size: 0.875rem;
  display: inline-flex;
  flex: 0 0 auto;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0.625rem;
  background-color: transparent;
  color: rgb(75, 87, 102);
  transition: all 0.2s ease-in-out 0s;
  outline: none;
  border-radius: 0.5rem;
`;
export const NavrightSecsSpan = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 auto;

  @media screen and (max-width: 31.25rem) {
    margin-right: 0rem;
  }
`;
export const NavrightSecsSpanIcon = styled.span`
  display: inline-block;
`;
export const NavrightSecsSpanSvg = styled.svg`
  fill: currentcolor;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const NavrightSecsSpanText = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (max-width: 31.25rem) {
    display: none;
  }
`;
export const NavrightThi = styled.div`
  position: relative;
  margin: 0 0.25rem;
  @media screen and (max-width: 31.25rem) {
    display: none;
  }
`;
export const NavrightFour = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.25rem;
  position: relative;
`;
export const NavrightFourContainer = styled.div`
  display: inline;
  cursor: pointer;
`;
export const NavrightFourSubContainer = styled.div``;
export const NavrightSubContainer = styled.div`
  font-size: 0.875rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0.625rem;
  background-color: transparent;
  color: rgb(75, 87, 102);
  transition: all 0.2s ease-in-out 0s;
  outline: none;
  border-radius: 0.5rem;
`;
export const NavrightSubSpan = styled.span`
  margin-right: 0px;
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 auto;
`;
export const NavrightSubSpanDiv = styled.span`
  color: inherit;
  font-size: 0.875rem;
`;
export const NavrightFifth = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.25rem;
  position: relative;
`;
export const NavrightSixth = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.25rem;
`;
export const NavrightSeventh = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.25rem;
  margin-right: 0.75rem;
`;
export const NavrightEighth = styled.div`
  top: 3rem;
  bottom: 3rem;
  position: fixed;
  inset: 3.75rem 0px 0rem;
  transition: opacity 0.4s ease 0s;
  background-color: rgba(0, 0, 0, 0.4);
  width: 0px;
  opacity: 0;
`;
export const NavrightNinth = styled.div`
  position: fixed;
  right: 0px;
  top: 3rem;
  bottom: 3rem;
  width: 100%;
  max-width: 400px;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 4px 0px inset;
  transition: transform 0.2s ease 0s;
  cursor: auto;
  background-color: rgb(243, 248, 254);
  transform: translateX(120%);
`;
export const NavrightTenth = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.25rem;
`;
