import styled from "styled-components";

export const AboutWrapper = styled.div`
  background-color: #a5d9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  @media screen and (max-width: 991px) {
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutContainerTop = styled.div`
  font-size: 2.6rem;
  margin-bottom: 2rem;
  color: #2946b6;
`;

export const AboutContainerBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const AboutContainerBottomContainer = styled.div`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;

  @media screen and (max-width: 991px) {
  }
`;

export const AboutContainerBottomHeader = styled.h3`
  font-size: 1.6rem;
  color: #2946b6;

  @media screen and (max-width: 991px) {
    font-size: 1.4rem;
  }
`;

export const AboutContainerBottomPara = styled.p`
  font-size: 1.2rem;
  color: #848484;

  @media screen and (max-width: 991px) {
    font-size: 1rem;
  }
`;

export const AboutContainerImg = styled.img`
  height: 9rem;
  width: 9rem;
`;
