import React from "react";
import EngImg from "../../assets/header-hello.png";
import {
  HeaderButton,
  HeaderContainer,
  HeaderElements,
  HeaderImg,
  HeaderImgContainer,
  HeaderList,
  HeaderPara,
  HeaderWrapper,
} from "./Header.elements";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faPenSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"; // Import your icons here

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderPara>اعرف مستواك باللغة الانجليزية في 7 دقائق</HeaderPara>
          <HeaderList>
            <HeaderElements>
              <FontAwesomeIcon
                icon={faMoneyBill}
                style={{ color: "#ffffff", marginLeft: "0.25rem" }}
              />
              مجاناً وبدون ما تضطر تدفع اي مبلغ مالي للاختبار
            </HeaderElements>
            <HeaderElements>
              <FontAwesomeIcon
                icon={faPenSquare}
                style={{
                  color: "#ffffff",
                  marginLeft: "0.25rem",
                }}
              />
              ١٢ سؤال ممتع ومتنوع يختبر مستواك بشكل حقيقي
            </HeaderElements>
            <HeaderElements>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#ffffff", marginLeft: "0.25rem" }}
              />
              يعلمك قدراتك التقريبية في اختبار الايلتس والستيب
            </HeaderElements>
          </HeaderList>

          <Link
            to="/train"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <HeaderButton>
              حدد مستواك مع{" "}
              <span>
                <CountUp start={8000} end={1200000} duration={3} />
              </span>{" "}
              شخص
            </HeaderButton>
          </Link>
        </HeaderContainer>
        <HeaderImgContainer>
          <HeaderImg src={EngImg} />
        </HeaderImgContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;
