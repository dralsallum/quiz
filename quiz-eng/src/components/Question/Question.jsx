import React from "react";
import {
  QuestionBanner,
  QuestionBannerArrowContain,
  QuestionBannerArrowContainer,
  QuestionBannerLast,
  QuestionBannerMain,
  QuestionBannerSub,
  QuestionChapterItemElement,
  QuestionChapterItemPara,
  QuestionChapterItemPart,
  QuestionChapterItemSpan,
  QuestionChapterItemSubPara,
  QuestionChapterOneContainer,
  QuestionChapterOneHeader,
  QuestionChapterOneHeaderContainer,
  QuestionChapterOnePara,
  QuestionChapterPicture,
  QuestionChapterPictureChildContainer,
  QuestionChapterPictureCircle,
  QuestionChapterPictureContainer,
  QuestionChapterPictureDefs,
  QuestionChapterPictureLine,
  QuestionChapterPictureMain,
  QuestionChapterPictureSection,
  QuestionChapterPictureStop,
  QuestionChapterPictureSvg,
  QuestionChapterPoint,
  QuestionChapterPointContainer,
  QuestionChapterProgress,
  QuestionChapterProgressContainer,
  QuestionChapterProgressSpan,
  QuestionContainer,
  QuestionMain,
  QuestionSubContainer,
  QuestionSubIcon,
  QuestionSubIconContainer,
  QuestionSubTitle,
  QuestionSubTitleContainer,
  QuestionTextContainer,
  QuestionTextContainerSec,
  QuestionTextContainerSub,
  QuestionTextContainerThi,
  QuestionTextHeader,
  QuestionTimeBoost,
  QuestionTimeBoostContainer,
  QuestionTimeKey,
  QuestionTimeKeyContainer,
  QuestionTimeline,
  QuestionTitle,
  QuestionTitleContainer,
  QuestionWrapper,
  AccessibleContainer,
} from "./Question.elements";
import chapterItems from "../../chapterItems";
import { Link } from "react-router-dom";
import { useLesson } from "../../LessonContext";
const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M12 16l4-4h-8z" />
  </svg>
);
const groupByChapter = (items) => {
  return items.reduce((acc, item) => {
    if (!acc[item.chapterId]) {
      acc[item.chapterId] = [];
    }
    acc[item.chapterId].push(item);
    return acc;
  }, {});
};

const chapters = groupByChapter(chapterItems);

const areAllLessonsCompleted = (lessons) => {
  return lessons.every((lesson) => lesson === true);
};

const ChapterItem = ({
  imgSrc,
  mainText,
  subText,
  type,
  completed,
  url,
  isAccessible,
}) => {
  const content = (
    <QuestionChapterItemElement>
      <QuestionChapterItemPart>
        <QuestionChapterPictureContainer>
          <QuestionChapterPictureChildContainer>
            <QuestionChapterPictureSvg>
              <QuestionChapterPictureDefs>
                <QuestionChapterPictureLine>
                  <QuestionChapterPictureStop></QuestionChapterPictureStop>
                </QuestionChapterPictureLine>
              </QuestionChapterPictureDefs>
              <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
              <QuestionChapterPictureCircle></QuestionChapterPictureCircle>
            </QuestionChapterPictureSvg>
          </QuestionChapterPictureChildContainer>
        </QuestionChapterPictureContainer>
        <QuestionChapterPictureSection completed={completed}>
          <QuestionChapterPicture src={imgSrc} alt="" completed={completed} />
        </QuestionChapterPictureSection>
        <QuestionChapterPictureMain></QuestionChapterPictureMain>
      </QuestionChapterItemPart>
      <QuestionChapterItemSpan>
        <QuestionChapterItemPara>{mainText}</QuestionChapterItemPara>
        <QuestionChapterItemSubPara>{subText}</QuestionChapterItemSubPara>
      </QuestionChapterItemSpan>
      {type !== "checkpoint" && ( // <-- Check if it's not a checkpoint
        <QuestionChapterPointContainer>
          <QuestionChapterPoint></QuestionChapterPoint>
        </QuestionChapterPointContainer>
      )}
    </QuestionChapterItemElement>
  );

  return (
    <AccessibleContainer isAccessible={isAccessible}>
      {isAccessible ? (
        <Link to={url} style={{ textDecoration: "none", color: "inherit" }}>
          {content}
        </Link>
      ) : (
        content
      )}
    </AccessibleContainer>
  );
};

// A simplified version of your Chapter
const Chapter = ({
  chapterNumber,
  totalLessons,
  chapterItems,
  isAccessible: isChapterAccessible,
}) => {
  const { lessonsCompleted } = useLesson();
  const lessonsForThisChapter = lessonsCompleted[chapterNumber] || [];
  const completedLessonsCount = lessonsForThisChapter.filter(
    (lesson) => lesson === true
  ).length;
  const progressWidth = `${(completedLessonsCount / totalLessons) * 100}%`;

  return (
    <QuestionChapterOneContainer
      completed={completedLessonsCount === totalLessons}
    >
      <QuestionChapterOneHeaderContainer>
        <QuestionChapterOneHeader>
          الوحدة {chapterNumber}
        </QuestionChapterOneHeader>
        <QuestionChapterOnePara>
          الدروس المكتملة {completedLessonsCount}/{totalLessons}
        </QuestionChapterOnePara>
        <QuestionChapterProgressContainer>
          <QuestionChapterProgress style={{ width: progressWidth }}>
            <QuestionChapterProgressSpan>
              {progressWidth}
            </QuestionChapterProgressSpan>
          </QuestionChapterProgress>
        </QuestionChapterProgressContainer>
      </QuestionChapterOneHeaderContainer>
      {chapterItems.map((item, index) => {
        const isAccessible =
          isChapterAccessible && lessonsForThisChapter[index];
        return (
          <ChapterItem
            key={index}
            isAccessible={isAccessible}
            completed={item.completed}
            type={item.type} // <-- Pass the type
            imgSrc={item.imgSrc}
            mainText={item.mainText}
            subText={item.subText}
            url={item.url}
          />
        );
      })}
    </QuestionChapterOneContainer>
  );
};

const Question = () => {
  const { lessonsCompleted } = useLesson();
  return (
    <QuestionMain>
      <QuestionWrapper>
        <QuestionContainer>
          <QuestionSubContainer>
            <QuestionTitleContainer>
              <QuestionTitle>تعلم الانجليزي</QuestionTitle>
              <QuestionSubTitleContainer>
                <QuestionSubTitle>مبتدى أ1</QuestionSubTitle>
                <QuestionSubIconContainer>
                  <QuestionSubIcon>
                    <Arrow />
                  </QuestionSubIcon>
                </QuestionSubIconContainer>
              </QuestionSubTitleContainer>
            </QuestionTitleContainer>
            <QuestionTimeline>
              <QuestionTimeBoostContainer>
                <QuestionTimeBoost>
                  <QuestionTimeKeyContainer>
                    <QuestionTimeKey>
                      <QuestionBanner>
                        <QuestionBannerMain>
                          <QuestionBannerSub>
                            <QuestionBannerLast></QuestionBannerLast>
                          </QuestionBannerSub>
                          <QuestionTextContainer>
                            <QuestionTextContainerSub></QuestionTextContainerSub>
                            <QuestionTextContainerSec>
                              <QuestionTextContainerThi>
                                <QuestionTextHeader>
                                  زِّد مهارات اللغة بخصم 50% على النسخة المميزة
                                </QuestionTextHeader>
                              </QuestionTextContainerThi>
                            </QuestionTextContainerSec>
                          </QuestionTextContainer>
                        </QuestionBannerMain>
                        <QuestionBannerArrowContainer>
                          <QuestionBannerArrowContain>
                            <Arrow
                              width="10"
                              height="15"
                              fill="none"
                              viewBox="0 0 10 15"
                            >
                              <path
                                fill="inherit"
                                fill-rule="evenodd"
                                d="M.9233 14.169c-.3694-.4105-.3361-1.0428.0744-1.4123L6.8385 7.5.9977 2.2433C.5872 1.8738.5539 1.2415.9233.831 1.2928.4205 1.9251.3873 2.3356.7567l6.6667 6a1 1 0 010 1.4866l-6.6667 6c-.4105.3695-1.0428.3362-1.4123-.0743z"
                                clip-rule="evenodd"
                              ></path>
                            </Arrow>
                          </QuestionBannerArrowContain>
                        </QuestionBannerArrowContainer>
                      </QuestionBanner>
                    </QuestionTimeKey>
                  </QuestionTimeKeyContainer>
                </QuestionTimeBoost>
                {Object.keys(chapters).map((chapterId, index) => {
                  const currentChapterItems = chapters[chapterId];
                  const prevChapterLessons = lessonsCompleted[String(index)];
                  const isAccessible =
                    index === 0 || // the first chapter is always accessible
                    areAllLessonsCompleted(prevChapterLessons || []); // subsequent chapters are accessible if all lessons in the previous chapter are completed
                  return (
                    <Chapter
                      key={chapterId}
                      chapterNumber={parseInt(chapterId, 10)}
                      totalLessons={currentChapterItems.length}
                      chapterItems={currentChapterItems}
                      isAccessible={isAccessible}
                    />
                  );
                })}
              </QuestionTimeBoostContainer>
            </QuestionTimeline>
          </QuestionSubContainer>
        </QuestionContainer>
      </QuestionWrapper>
    </QuestionMain>
  );
};

export default Question;
