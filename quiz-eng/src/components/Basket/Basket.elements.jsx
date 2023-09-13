import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  flex-wrap: wrap;
  height: max-content;
  justify-content: space-between;
  direction: rtl;
`;
export const CheckoutContainerLeft = styled.div``;
export const CheckoutContainerLeftHeader = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;
export const CheckoutContainerRightHeader = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

export const CheckoutContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  color: #2946b6;
  font-style: italic;
`;

// In your Basket.elements.js file
export const BasketItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 10px;
`;

export const BasketItemImg = styled.img`
  width: 150px;
`;

export const BasketItemInfo = styled.div``;

export const BasketItemPara = styled.p``;

export const BasketButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#2946b6" : "#759159")};
  white-space: nowrap;
  padding: 5px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 2px;
  width: 8rem;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#000000" : "#000000")};
  }
`;
