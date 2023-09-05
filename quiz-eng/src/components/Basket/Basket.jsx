import React from "react";
import {
  CheckoutContainerLeft,
  CheckoutContainerLeftHeader,
  CheckoutContainerRight,
  CheckoutContainerRightHeader,
  CheckoutWrapper,
} from "./Basket.elements";
import Subtotal from "../Subtotal/Subtotal";

const Basket = () => {
  return (
    <CheckoutWrapper>
      <CheckoutContainerRight>
        <CheckoutContainerRightHeader>محتوى السلة</CheckoutContainerRightHeader>
      </CheckoutContainerRight>
      <CheckoutContainerLeft>
        <Subtotal />
      </CheckoutContainerLeft>
    </CheckoutWrapper>
  );
};

export default Basket;
