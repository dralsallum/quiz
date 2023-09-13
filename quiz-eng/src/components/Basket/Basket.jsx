import React, { useEffect } from "react";
import {
  CheckoutContainerLeftHeader,
  CheckoutContainerRight,
  CheckoutWrapper,
  BasketItem,
  BasketButton,
  BasketItemImg,
  BasketItemInfo,
  BasketItemPara,
} from "./Basket.elements";

import Subtotal from "../Subtotal/Subtotal";
import { useBasket } from "../../BasketContext";

const Basket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { basketItems, removeFromBasket } = useBasket();

  const subtotal = basketItems.reduce((acc, item) => {
    const price = parseFloat(item.price);
    if (isNaN(price)) {
      console.warn(`Could not parse the price of item: ${item.name}`);
      return acc;
    }
    return acc + price;
  }, 0);

  return (
    <CheckoutWrapper>
      {/* Display the basket items */}
      <Subtotal subtotal={subtotal} />
      <CheckoutContainerRight>
        <CheckoutContainerLeftHeader>محتوى السلة</CheckoutContainerLeftHeader>
        {basketItems.map((item, index) => (
          <BasketItem key={index}>
            <BasketItemImg src={item.image} alt={item.name} />
            <BasketItemInfo>
              <BasketItemPara style={{ color: "#2946b6", fontSize: "20px" }}>
                {item.name}
              </BasketItemPara>
              <BasketItemPara style={{ color: "#000000", fontSize: "18px" }}>
                {item.price} ريال{" "}
              </BasketItemPara>
              <BasketButton primary onClick={() => removeFromBasket(index)}>
                ازالة المنتج
              </BasketButton>
            </BasketItemInfo>
          </BasketItem>
        ))}
      </CheckoutContainerRight>
    </CheckoutWrapper>
  );
};

export default Basket;
