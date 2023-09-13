import styled from "styled-components";

export const SliderWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  direction: rtl;
`;

export const SliderArrowContainerAll = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const SliderArrowContainer = styled.div`
  position: absolute;
  gap: 1rem;
  top: -2.2rem;
  left: 0;
  display: flex;
`;
export const SliderArrowContainer1 = styled.div`
  position: absolute;
  gap: 1rem;
  top: -2.2rem;
  right: 0;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  color: #2946b6;

  @media screen and (max-width: 960px) {
    font-size: 1.3rem;
    padding-top: 0.4rem;
  }
`;

export const SliderArrowButtonRight = styled.button`
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  color: black;
  border: none;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.3 ease-in-out;

  &:hover {
    background-color: black;
    color: #eeeeff;
  }
`;
export const SliderArrowButtonLeft = styled.button`
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  color: black;
  border: none;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.3 ease-in-out;

  &:hover {
    background-color: black;
    color: #eeeeff;
  }
`;

export const SliderContainer = styled.div`
  padding: 2.5rem 2.5rem;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: 1536px) {
    max-width: 1280px;
    margin: auto;
  }
`;

export const SliderHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SliderHeaderSpan = styled.span`
  color: #000000;
  font-size: 1.4rem;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
  }
`;

export const SliderSubHeaderSpan = styled.span`
  color: #1f3e72;
  font-size: 1.8rem;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    font-size: 1.3rem;
  }
`;

export const SliderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 1rem;
  border-radius: 10px;
  max-width: max-content;
  margin: auto;
  transition: all 0.5 ease-in-out;

  &:hover {
    scale: 1.025;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(136, 160, 255, 0.46) 217.91%
    );
    box-shadow: 0px 72px 49px -51px rgba(136, 160, 255, 0.21);
  }
`;

export const SliderCardImg = styled.img`
  width: 100%;
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 8px;
`;
export const SliderCardSpan = styled.div`
  color: rgb(140 139 139);
  font-size: 1.1rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;
export const SliderCardSubSpan1 = styled.div`
  display: flex;
  align-items: center;
`;
export const SliderCardSubSpan2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SliderCardSubSpan3 = styled.div`
  color: #000000;
  font-weight: bold;
  font-size: 1rem;
  padding-right: 0.2rem;
  margin-left: 0.2rem;

  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }
`;
export const SliderCardSubSpan4 = styled.span`
  color: rgb(140 139 139);
  font-size: 0.7rem;
  width: 15rem;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #2946b6;
  white-space: nowrap;
  padding: 8px 14px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: #000000;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
