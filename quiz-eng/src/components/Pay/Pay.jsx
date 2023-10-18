import React from "react";
import { useBasket } from "../../BasketContext"; // <-- Import useBasket hook
import { useUser } from "../../UserContext";
import {
  BasketButton,
  BasketItem,
  BasketItemImg,
  BasketItemInfo,
  BasketItemPara,
  CheckoutContainerItems,
  CheckoutContainerLeftHeader,
  CheckoutContainerRight,
  PayAddressContainer,
  PayAddressPara,
  PayContainer,
  PaySection,
  PayTitle,
  PayTitleContainer,
  PayWrapper,
  PayWrapperTitle,
} from "./Pay.elements";

const Pay = () => {
  const { user } = useUser();
  const { basketItems, removeFromBasket } = useBasket();

  return (
    <PayWrapper>
      <PayWrapperTitle>منطقة البيع</PayWrapperTitle>
      <PayContainer>
        <PaySection>
          <PayTitleContainer>
            <PayTitle>عنوان التوصيل</PayTitle>
          </PayTitleContainer>
          <PayAddressContainer>
            <PayAddressPara>{user?.emailPrefix}</PayAddressPara>
            <PayAddressPara>123 React Lane</PayAddressPara>
            <PayAddressPara>Los Angeles, Ca</PayAddressPara>
          </PayAddressContainer>
        </PaySection>
        <CheckoutContainerRight>
          <CheckoutContainerLeftHeader>محتوى السلة</CheckoutContainerLeftHeader>
          <CheckoutContainerItems>
            {basketItems.map((item, index) => (
              <BasketItem key={index}>
                <BasketItemImg src={item.image} alt={item.name} />
                <BasketItemInfo>
                  <BasketItemPara
                    style={{ color: "#2946b6", fontSize: "20px" }}
                  >
                    {item.name}
                  </BasketItemPara>
                  <BasketItemPara
                    style={{ color: "#000000", fontSize: "18px" }}
                  >
                    {item.price} ريال{" "}
                  </BasketItemPara>
                  <BasketButton primary onClick={() => removeFromBasket(index)}>
                    ازالة المنتج
                  </BasketButton>
                </BasketItemInfo>
              </BasketItem>
            ))}
          </CheckoutContainerItems>
        </CheckoutContainerRight>
        <PaySection>
          <PayTitleContainer>
            <PayTitle>طريقة الدفع</PayTitle>

            {/*here will be my api*/}
          </PayTitleContainer>
          <PayAddressContainer></PayAddressContainer>
        </PaySection>
      </PayContainer>
    </PayWrapper>
  );
};

export default Pay;
