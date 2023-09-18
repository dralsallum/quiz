import React from "react";
import {
  ArContainerF,
  ArContainerFCon,
  ArContainerFHe,
  ArContainerFPara,
  ArContainerS,
  ArContainerSImg,
  ArSubContainerF,
  ArWrapper,
} from "./Article.elements";
import Page from "../../assets/page.jpg";

const Article = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFCon>مجتمع متكامل</ArContainerFCon>
          <ArContainerFHe>تعلم اكثر مع غيرك</ArContainerFHe>
          <ArContainerFPara>
            تجاوز الكتب المدرسية. تمرن على النطق، احصل على رؤى ثقافية وتبادل
            نصائح اللغة المحلية مع مجتمعنا العالمي من المتعلمين
          </ArContainerFPara>
        </ArSubContainerF>
      </ArContainerF>
      <ArContainerS>
        <ArContainerSImg src={Page} />
      </ArContainerS>
    </ArWrapper>
  );
};

export default Article;
