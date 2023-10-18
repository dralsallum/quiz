import React from "react";
import { useBasket } from "../../BasketContext";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import Friends from "../../assets/friends forever.jpg";
import Behind from "../../assets/Behind grey eye.jpg";
import Beyond from "../../assets/Beyond the clock.jpg";
import Whispers from "../../assets/Whispers in the Rails.jpg";
import { Link } from "react-router-dom";
import {
  Button,
  SliderWrapper,
  SliderContainer,
  SliderHeader,
  SliderHeaderSpan,
  SliderSubHeaderSpan,
  SliderCardContainer,
  SliderCardImg,
  SliderCardSpan,
  SliderCardSubSpan1,
  SliderCardSubSpan2,
  SliderCardSubSpan3,
  SliderCardSubSpan4,
  SliderArrowContainer,
  SliderArrowButtonRight,
  SliderArrowButtonLeft,
  SliderArrowContainerAll,
  SliderArrowContainer1,
} from "./Slider.elements";
import { sliderSettings } from "../../utils/common";

const images = [Friends, Behind, Beyond, Whispers];
const imageMapping = {
  "Whispers in the Rails": Whispers,
  "Friends Forever": Friends,
  "Behind Grey Eyes": Behind,
  "Beyond the clock": Beyond,
};

const SliderButton = ({ swiper }) => {
  return (
    <SliderArrowContainerAll>
      <SliderArrowContainer1>كتب انجليزية للمبتدئاً</SliderArrowContainer1>
      <SliderArrowContainer>
        <SliderArrowButtonLeft onClick={() => swiper && swiper.slidePrev()}>
          &lt;
        </SliderArrowButtonLeft>
        <SliderArrowButtonRight onClick={() => swiper && swiper.slideNext()}>
          &gt;
        </SliderArrowButtonRight>
      </SliderArrowContainer>
    </SliderArrowContainerAll>
  );
};

const Slider = () => {
  const { addToBasket } = useBasket();
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  const handleAddToBasket = (item) => {
    addToBasket({
      name: item.name,
      price: item.price,
      image: imageMapping[item.name], // Use the imageMapping object here
    });
  };

  const slides = data.map((card, i) => (
    <SwiperSlide key={i}>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={`/product/${encodeURIComponent(card.name)}`}
      >
        <SliderCardContainer>
          <SliderCardImg src={imageMapping[card.name]} alt={card.name} />
          <SliderCardSubSpan1>
            <SliderCardSubSpan3>{card.name}</SliderCardSubSpan3>
            <SliderCardSpan>{card.price} ريال</SliderCardSpan>
          </SliderCardSubSpan1>
        </SliderCardContainer>
      </Link>
      <SliderCardSubSpan2>
        <Button
          onClick={(e) => {
            e.stopPropagation(); // prevent the click from triggering the Link
            handleAddToBasket(card); // Pass the whole card object to your function
          }}
          primary
        >
          اضافة للسلة
        </Button>
      </SliderCardSubSpan2>
    </SwiperSlide>
  ));

  return (
    <SliderWrapper>
      <SliderContainer>
        <SliderButton swiper={swiperInstance} />
        <Swiper
          {...sliderSettings}
          style={{ overflow: "visible" }}
          onSwiper={setSwiperInstance}
        >
          {slides}
        </Swiper>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
