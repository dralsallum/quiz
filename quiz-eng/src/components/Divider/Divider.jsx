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
} from "./Divider.elements";
import Pic from "../../assets/Divider.jpeg";

const Divider = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFCon>صنع من محترفين</ArContainerFCon>
          <ArContainerFHe>تعلم بثقة</ArContainerFHe>
          <ArContainerFPara>
            قم بتحسينات حقيقية، واحصل على نتائج حقيقية. كن مستعدًا للتفاعلات في
            العالم الحقيقي من خلال بناء أساسات قوية مع الكثير من التمرين على
            التحدث والاستماع والقراءة والكتابة.
          </ArContainerFPara>
        </ArSubContainerF>
      </ArContainerF>
      <ArContainerS>
        <ArContainerSImg src={Pic} />
      </ArContainerS>
    </ArWrapper>
  );
};

export default Divider;
