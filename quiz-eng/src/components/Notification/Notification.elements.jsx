import styled from "styled-components";
export const NotWrap = styled.div`
  position: fixed;
  direction: rtl;
  cursor: default;
  margin-top: 4rem;
  margin-right: 2rem;
  width: 31.25rem;
  padding: 0;
  color: #252b2f;
  background-color: #fff;
  border: 1px solid #d6dee6;
  border-radius: 0.75rem;
  text-align: left;
  z-index: 9999;
  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.06);
  right: 0;
  pointer-events: auto;

  @media screen and (max-width: 50rem) {
    margin-top: 4rem;
    margin-right: 1rem;
    width: 21.25rem;
  }
`;
export const NotCon = styled.div`
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: 50rem) {
    max-height: 100%;
  }
`;
export const NotUl = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 40px;
  padding-inline-start: 0px;
  display: block;
  color: #252b2f;
  text-align: right;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotTit = styled.li`
  border-top: 0;
  position: relative;
  font-size: 0.875rem;
  line-height: 0.875rem;
  padding: 0.2rem 1rem;
  color: #252b2f;
  text-align: center;
  display: list-item;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotLi = styled.li`
  position: relative;
  border-top: 1px solid #d6dee6;
  min-height: 4.6875rem;
  background-color: #e6f0fe;
  display: flex;
  align-items: center;
  padding: 0.9375rem;
  cursor: pointer;
  margin-bottom: 1rem;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotLiCon = styled.div`
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotLiTex = styled.div`
  display: block;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotLiIc = styled.div`
  margin-right: auto;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotLiIm = styled.img`
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  margin-left: 0.75rem;
  overflow: hidden;
  border: 1px solid #d6dee6;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotLiPara = styled.p`
  font-size: 0.875rem;
  line-height: 1.7;
  margin-bottom: 0.375rem;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotLiPa = styled.p`
  font-size: 0.75rem;
  line-height: 1.7;
  font-weight: 100;
  color: #666e7e;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotBot = styled.div`
  display: inline;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotBotAt = styled.a`
  display: block;
  position: relative;
  height: 0.9375rem;
  width: 0.9375rem;
  border: 0.125rem solid #0e5bc7;
  border-radius: 50%;
  text-decoration: none;

  @media screen and (max-width: 50rem) {
  }
`;
