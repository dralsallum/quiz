import styled from "styled-components";

export const Subtotalwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 130px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
`;

export const GiftContainer = styled.small`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: gray;
`;

export const Giftinput = styled.input`
  margin-left: 5px;
`;

export const GiftButton = styled.button`
  background: #2946b6;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #a9c7e31 #846a29;
  color: #ffffff;
  cursor: pointer;
`;
