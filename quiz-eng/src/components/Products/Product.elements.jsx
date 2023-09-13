import styled from "styled-components";

const BaseButton = styled.button`
  border-radius: 4px;
  background: #2946b6;
  padding: 8px 20px;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
  &:hover {
    transition: all 0.3s ease-out;
    box-shadow: none;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

export const ProductContainerLeft = styled.div`
  width: 350px;

  @media screen and (max-width: 960px) {
    width: 250px;
  }
`;

export const ProductContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ProductHeader = styled.h2`
  font-size: 2.4rem;

  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`;

export const ProductNumber = styled.div`
  border-radius: 4px;
  background: gray;
  padding: 8px 20px;
  width: 100%;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  text-align: center;
`;

export const ProductNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProductAdd = styled(BaseButton)``;

export const ProductImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
