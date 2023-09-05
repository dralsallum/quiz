import React from "react";
import { useBasket } from "../../BasketContext";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import Bottle from "../../assets/Whispers in the Rails.jpg";
import Browse from "../../assets/friends forever.jpg";
import Pills from "../../assets/Behind grey eye.jpg";
import Skin from "../../assets/Beyond the clock.jpg";
import Spray from "../../assets/Whispers in the Rails.jpg";
import Envelop from "../../assets/friends forever.jpg";
import { Button } from "../../globalStyles";
import {
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

const images = [Bottle, Browse, Pills, Skin, Spray];
const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <SliderArrowContainerAll>
      <SliderArrowContainer1>كتب انجليزية للمبتدئاً</SliderArrowContainer1>
      <SliderArrowContainer>
        <SliderArrowButtonLeft onClick={() => swiper.slidePrev()}>
          &lt;
        </SliderArrowButtonLeft>
        <SliderArrowButtonRight onClick={() => swiper.slideNext()}>
          &gt;
        </SliderArrowButtonRight>
      </SliderArrowContainer>
    </SliderArrowContainerAll>
  );
};

const Slider = () => {
  const { addToBasket } = useBasket();
  return (
    <SliderWrapper>
      <SliderContainer>
        <Swiper {...sliderSettings} style={{ overflow: "visible" }}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <SliderCardContainer>
                <SliderCardImg src={images[i]} alt="home" />
                <SliderCardSubSpan1>
                  <SliderCardSubSpan3>{card.name}</SliderCardSubSpan3>
                  <SliderCardSpan>{card.price}</SliderCardSpan>
                </SliderCardSubSpan1>
                <Button
                  onClick={addToBasket}
                  primary // Add this line
                  style={{
                    padding: "8px 14px",
                    alignSelf: "center",
                  }}
                >
                  اضافة للسلة
                </Button>
              </SliderCardContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
