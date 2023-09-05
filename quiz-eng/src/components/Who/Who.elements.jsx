import styled from "styled-components";

export const WhoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  direction: rtl;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 2rem;
  margin-bottom: 1rem;
`;
export const WhoMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const WhoContainer = styled.div``;
export const WhoHeader = styled.h3`
  color: #2946b6;
  font-size: 2rem;
`;
export const WhoPara = styled.p`
  color: #848484;
  font-size: 1.1rem;
  padding: 0 0.8rem;
  text-align: center;
`;

export const WhoButton = styled.button`
  background-color: #2946b6;
  color: #fff;
  padding: 1rem 3rem;
  border: none;
  border-radius: 12px;
  font-size: 1.4rem;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const WhoImgContainer = styled.div`
  display: flex;


  }
`;
export const WhoImg = styled.img`
  object-fit: cover;
  width: 15rem;
`;
