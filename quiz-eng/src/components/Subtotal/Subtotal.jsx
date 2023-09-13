import React from "react";
import {
  GiftButton,
  GiftContainer,
  Giftinput,
  Subtotalwrapper,
} from "./Subtotal.elements";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const Subtotal = ({ subtotal }) => {
  const navigate = useNavigate();
  return (
    <Subtotalwrapper>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              مجموع المشتريات في السلة : <strong>{value} ريال </strong>
            </p>
            <GiftContainer>
              <Giftinput type="checkbox" /> هذا الطلب يحتوي هدية
            </GiftContainer>
          </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType={"text"}
        thousandSeparator={true}
      />
      <GiftButton onClick={(e) => navigate("/payment")}>انتقل للدفع</GiftButton>
    </Subtotalwrapper>
  );
};

export default Subtotal;
