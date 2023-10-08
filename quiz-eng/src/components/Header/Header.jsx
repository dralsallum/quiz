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
          <HeaderPara>تعلم الانجليزية واستخدمها في حياتك اليومية</HeaderPara>
          <HeaderList>
            <HeaderElements>
              <FontAwesomeIcon
                icon={faMoneyBill}
                style={{ color: "#ffffff", marginLeft: "0.25rem" }}
              />
              مجاناً وبدون ما تضطر تدفع اي مبلغ مالي للتجربة
            </HeaderElements>
            <HeaderElements>
              <FontAwesomeIcon
                icon={faPenSquare}
                style={{
                  color: "#ffffff",
                  marginLeft: "0.25rem",
                }}
              />
              اسئلة ممتعة ومتنوعة تطور مستواك بشكل حقيقي
            </HeaderElements>
            <HeaderElements>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#ffffff", marginLeft: "0.25rem" }}
              />
              يعلمك قدراتك في معظم الاختبارات الانجليزية
            </HeaderElements>
          </HeaderList>

          <Link
            to="/train"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <HeaderButton>تعلم مجاناً اليوم</HeaderButton>
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
