import React, { createContext, useState, useContext } from "react";

export const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [basketCount, setBasketCount] = useState(0);
  const [animate, setAnimate] = useState(false); // Add this line for animation state

  const addToBasket = (item) => {
    setBasketItems([...basketItems, item]);
    setBasketCount(basketCount + 1);
    setAnimate(true); // Trigger animation

    setTimeout(() => {
      setAnimate(false); // Reset animation state after 300ms
    }, 300);
  };

  const removeFromBasket = (index) => {
    const newBasketItems = [...basketItems];
    newBasketItems.splice(index, 1);
    setBasketItems(newBasketItems);
    setBasketCount(basketCount - 1);
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        basketCount,
        addToBasket,
        removeFromBasket,
        animate,
      }} // Include animate in context
    >
      {children}
    </BasketContext.Provider>
  );
};
