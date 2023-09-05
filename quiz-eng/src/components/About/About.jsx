import React from "react";
import {
  AboutWrapper,
  AboutContainer,
  AboutContainerTop,
  AboutContainerBottom,
  AboutContainerBottomContainer,
  AboutContainerImg,
  AboutContainerBottomHeader,
  AboutContainerBottomPara,
} from "./About.elements";
import Inelctual from "../../assets/icon-english.png";
import English from "../../assets/icon-advice.png";
import Website from "../../assets/icon-intellectual.png";

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutContainerTop>مميزات الاختبار</AboutContainerTop>
        <AboutContainerBottom>
          <AboutContainerBottomContainer>
            <AboutContainerImg src={Inelctual} />
            <AboutContainerBottomHeader>
              اختبار ذكي ومعياري
            </AboutContainerBottomHeader>
            <AboutContainerBottomPara>
              الأسئلة في الاختبار شاملة في كل محاولة، وتصبح أسهل أو أكثر تحدياً
              استناداً إلى مستواك. لذلك، فإن 12 سؤال فقط كافية لتحديد مستواك
              بدقة.
            </AboutContainerBottomPara>
          </AboutContainerBottomContainer>
          <AboutContainerBottomContainer>
            <AboutContainerImg src={English} />
            <AboutContainerBottomHeader>
              يقيم جميع المهارات
            </AboutContainerBottomHeader>
            <AboutContainerBottomPara>
              هذا الاختبار يقيم جميع المهارات الأساسية المطلوبة في الإنجليزية
              مثل القراءة، القواعد، الكلمات، وحتى الاستماع. لذا، سيكون المستوى
              الذي ستحصل عليه أكثر شمولية ودقة.
            </AboutContainerBottomPara>
          </AboutContainerBottomContainer>
          <AboutContainerBottomContainer>
            <AboutContainerImg src={Website} />
            <AboutContainerBottomHeader>
              نصائح وموارد للتطور
            </AboutContainerBottomHeader>
            <AboutContainerBottomPara>
              بمجرد الانتهاء، ستحصل على مستواك وعلى درجتك التقديرية في الاختبار
              العالمي IELTS. وليس ذلك فحسب، بل ستحصل أيضاً على نصائح محددة حول
              كيفية تحسين الإنجليزية من مستواك الحالي.
            </AboutContainerBottomPara>
          </AboutContainerBottomContainer>
        </AboutContainerBottom>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
