import React, { createContext, useState, useContext } from "react";

export const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketCount, setBasketCount] = useState(0);

  const addToBasket = () => {
    setBasketCount(basketCount + 1);
  };

  return (
    <BasketContext.Provider value={{ basketCount, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
