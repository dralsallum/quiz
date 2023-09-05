import React from "react";
import Profile from "../../assets/n7mrs-5b_400x400.png";
import {
  WhoButton,
  WhoContainer,
  WhoHeader,
  WhoImg,
  WhoImgContainer,
  WhoMain,
  WhoPara,
  WhoWrapper,
} from "./Who.elements";
import { Link } from "react-router-dom";

const Who = () => {
  return (
    <WhoWrapper>
      <WhoHeader>قصتي بدأت من هنا!</WhoHeader>
      <WhoMain>
        <WhoImgContainer>
          <WhoImg src={Profile} alt="" />
        </WhoImgContainer>
        <WhoContainer>
          <WhoPara>
            بدأت قصتي كشخص يطمح ان يكون طبيب وفي البداية، وجدت اللغة صعبة
            ومعقدًا، لكن الحاجة للغة الإنجليزية في مجال الطب دفعتني للاستمرار.
            قررت أن أجرب اختبار تحديد المستوى وكانت النتيجة مخيبة.
            <br />
            <br />
            هذه النتيجة كانت خطوة مهمة بالنسبة لي، لأنها ساعدتني في تحديد الطريق
            اللي لازم أني أسلكه لتحسين مهاراتي في اللغة الإنجليزية. كانت بداية
            لرحلة تعلم اللغة الإنجليزية بنفسي. ولاحظت أن العديد من الناس يدورون
            عن اختبارات تحديد المستوى، ولكن الكثير من هذي الاختبارات على
            الإنترنت طويلة ومملة وتواجه بعض المشاكل. لذلك قررت أن أقدم اختبارًا
            يساعد الناس على تحديد مستواهم.
            <br />
            <br />
            وايضاً بأقدم أيضًا نصائح ومصادر يمكن للناس استخدامها لتطوير مهاراتهم
            في اللغة الإنجليزية بناءً على مستواهم. كل هذا مجانًا، لأنني مقتنع
            بأنه بيكون مفيدًا بشكل كبير لأي شخص يحاول تعلم اللغة الإنجليزية.
          </WhoPara>
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <WhoButton>ابدا!</WhoButton>
          </Link>
        </WhoContainer>
      </WhoMain>
    </WhoWrapper>
  );
};

export default Who;
