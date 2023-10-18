import React, { useState, useEffect } from "react";
import { useBasket } from "../../BasketContext";
import Friends from "../../assets/friends forever.jpg";
import Behind from "../../assets/Behind grey eye.jpg";
import Beyond from "../../assets/Beyond the clock.jpg";
import Whispers from "../../assets/Whispers in the Rails.jpg";
import { useParams } from "react-router-dom";
import {
  ProductAdd,
  ProductContainer,
  ProductContainerLeft,
  ProductContainerRight,
  ProductHeader,
  ProductImg,
  ProductNumber,
  ProductNumberContainer,
} from "./Product.elements";
import data from "../../utils/slider.json";
import { FooterMe, NavTech } from "..";

const imageMapping = {
  "Whispers in the Rails": Whispers,
  "Friends Forever": Friends,
  "Behind Grey Eyes": Behind,
  "Beyond the clock": Beyond,
};

const Products = () => {
  const { name } = useParams();
  const [number, setNumber] = useState(1);
  const { addToBasket } = useBasket();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const decodedName = decodeURIComponent(name);
    const foundProduct = data.find((p) => p.name === decodedName);
    setProduct(foundProduct);
  }, [name]);

  const handleAddToBasket = () => {
    const item = {
      name: product.name,
      price: product.price * number,
      image: imageMapping[product.name],
      quantity: number,
    };
    addToBasket(item);
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavTech />
      <ProductContainer>
        <ProductContainerLeft>
          <ProductImg src={imageMapping[product.name]} alt={product.name} />
        </ProductContainerLeft>
        <ProductContainerRight>
          <ProductHeader>{product.name}</ProductHeader>
          <div>
            <h3>(نسخة الكترونية)</h3>
          </div>
          <ProductNumberContainer>
            <ProductAdd onClick={handleAddToBasket}>
              اضافة للسلة - {product.price * number} ريال
            </ProductAdd>
          </ProductNumberContainer>
        </ProductContainerRight>
      </ProductContainer>
      <FooterMe />
    </>
  );
};

export default Products;
