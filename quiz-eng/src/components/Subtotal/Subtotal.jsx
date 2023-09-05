import React from "react";
import {
  GiftButton,
  GiftContainer,
  Giftinput,
  Subtotalwrapper,
} from "./Subtotal.elements";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <Subtotalwrapper>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              مجموع المشتريات (0 عناصر): <strong>{value}</strong>
            </p>
            <GiftContainer>
              <Giftinput type="checkbox" /> هذا الطلب يحتوي هدية
            </GiftContainer>
          </>
        )}
        decimalScale={2}
        prefix={" ريال "}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
      />

      <GiftButton>انتقل للدفع</GiftButton>
    </Subtotalwrapper>
  );
};

export default Subtotal;
