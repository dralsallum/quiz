import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  margin: 2rem 2rem 1.5rem 1.5rem;
  flex-wrap: wrap;
  gap: 4rem;

  @media screen and (max-width: 900px) {
    gap: 1rem;
    margin: 1rem 2rem 1.5rem 1.5rem;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 991px) {
    justify-content: center;
    align-items: center;
  }
`;
export const HeaderPara = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;
export const HeaderList = styled.ul`
  font-size: 1.2rem;
  color: #ffffff;
  list-style-type: none;
  padding: 0;
  text-align: right;

  @media screen and (max-width: 991px) {
    font-size: 0.9rem;
  }
`;
export const HeaderElements = styled.li`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: nowrap;
`;
export const HeaderButton = styled.button`
  background-color: #40f1a8;
  color: #000000;
  font-weight: 500;
  padding: 0.8rem 3rem;
  border: none;
  border-radius: 20px;
  font-size: 1.4rem;
  margin-top: 1rem;


}

  &:hover {
    cursor: pointer;

  }

  @media screen and (max-width: 991px) {
    font-size: 1.2rem;
  }
`;

export const HeaderImg = styled.img`
  object-fit: cover;
  width: 20rem;
`;
export const Headerbackground = styled.img`
  object-fit: cover;
  width: 20rem;
`;
export const HeaderImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
